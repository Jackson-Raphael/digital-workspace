# Code Patterns

I'm still new to React and learning these patterns myself, so this page is very much a work in progress. However there are some patterns I feel quite strongly about.


## Tailwind Merging

Placing a really great simple writeup on this our docs so we dont lose it if the post is deleted.

[Source](https://www.reddit.com/r/tailwindcss/comments/1egbuvx/the_buzz_around_cn_function_and_why_do_we_use_it/)

I've noticed a lot of developers are using the cn() utility function when working with Tailwind CSS. In this post, I'll explain why this is becoming so popular and how it can help streamline your development process.

Let's start from scratch. Imagine you have a button component in your project, and you want to pass a class name to it just like you would with a native HTML element. For instance, your button has a default background color of bg-blue-500, but you want to override it with bg-green-500.

Typically, you would do something like this:

```tsx
const Button = ({ className, ...props }) => {
	return (<button className={`bg-blue-500 ${className}`} {...props} />);
};
```

However, this approach has a problem: conflicts between Tailwind classes are not predictable. For example, you don't know if bg-blue-500 or bg-green-500 will win when both are present.

This is where twMerge comes in. By using the twMerge function from the tailwind-merge package, you can ensure that the classes you pass as props override the default ones correctly. Here's how you can use it:

```tsx
import { twMerge } from "tailwind-merge";

const Button = ({ className, ...props }) => {
  return (<button className={twMerge('bg-blue-500', className)}/>)
}
```

With twMerge, you can be confident that bg-green-500 will override bg-blue-500.

Next, let's talk about conditional classes. If you have a pending state that changes the background color, you might want to use the object syntax for conditional classes. Unfortunately, twMerge doesn't support this out of the box. But there's another library called clsx that does.

clsx allows you to use object syntax for conditional classes. For instance, you can define classes conditionally based on the state like this:

```tsx
import clsx from "clsx";

const Button = ({ className, pending, ...props }) => {
	return (
		<button
			className={clsx("bg-blue-500", className, { "bg-gray-500": pending })}
			{...props}
		/>
	);
};
```

Here, if pending is true, bg-gray-500 will be applied. This object syntax is very convenient for handling conditional classes.

However, clsx alone does not handle conflicts between Tailwind classes. So, the solution is to combine clsx with twMerge, resulting in the cn() utility function. This function gives you the best of both worlds: intelligent merging of conflicting classes and support for object syntax.

Here's how to create and use the cn() function:

```tsx
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

const Button = ({ className, pending, ...props }) => {
	return (
		<button
			className={cn("bg-blue-500", className, pending && "bg-gray-500")}
			{...props}
		/>
	);
};

```

With cn(), you can handle both conditional classes and conflicting classes easily.

In our template you will find it in shared/utils making it available to all the above layers.

## Compound Composition

In our component-driven development, styles are reused by composing components styled with utility classes (Tailwind) rather than traditional CSS classes with complex styles and crazy naming conventions.

React supports a few patterns for composing components. Here's a comparison:

### Traditional Props Pattern

This approach passes everything through props, which can become unwieldy as complexity grows.

```tsx
// Props get unwieldy quickly, especially if you add class merging and props to the props!
<Card
  title="User Profile"
  subtitle="Manage your account"
  content={<UserForm />}
  footer={<Button>Save</Button>}
  headerIcon={<UserIcon />}
  className="bg-primary-100"
  titleClassName="text-lg font-bold"
  contentClassName="p-4"
/>
```
Especially when you consider cases where you want to utilize class overides on props or subprops.

```tsx
<Card
  title="User Profile"
  subtitle="Manage your account"
  content={<UserForm className="p2 text-2xl border"/>}
  footer={<Button variant="primary" className="p3">Save</Button>}
  headerIcon={<UserIcon />}
  className="bg-primary-100"
  titleClassName="text-lg font-bold"
  contentClassName="p-4"
/>
```

### Compound Composition Pattern

This pattern uses nested subcomponents for a cleaner, more readable structure that resembles traditional markup.

```tsx
// Clean, readable markup that flows naturally
<Card className="bg-primary-100">
  <CardHeader>
    <CardIcon><UserIcon /></CardIcon>
    <CardTitle className="text-lg font-bold">User Profile</CardTitle>
    <CardSubtitle>Manage your account</CardSubtitle>
  </CardHeader>
  <CardBody className="p-4">
    <UserForm />
  </CardBody>
  <CardFooter>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

While the traditional props pattern seems simpler initially, it can quickly turn into a mess—especially with long lists of Tailwind classes and props with their own props, etc.

The compound composition pattern flows more naturally and works better with linters and the all important Tailwind Fold VSCode extension.

### Implementation Example

Here's how to implement the compound pattern for a Card component. We attach subcomponents as static properties on the main component.

```tsx
import { cn } from '@/utils/cn';

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-lg shadow-md", className)}>{children}</div>;
}

function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-4 border-b", className)}>{children}</div>;
}

function CardIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("mr-2", className)}>{children}</span>;
}

function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn("text-xl font-semibold", className)}>{children}</h2>;
}

function CardSubtitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-sm text-gray-600", className)}>{children}</p>;
}

function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-4", className)}>{children}</div>;
}

function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-4 border-t", className)}>{children}</div>;
}

Card.Header = CardHeader;
Card.Icon = CardIcon;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Footer = CardFooter;

// Usage allows flexible composition
<Card className="w-80">
  <Card.Header>
    <Card.Title>Simple Card</Card.Title>
  </Card.Header>
  <Card.Body>Content only—no subtitle or icon needed.</Card.Body>
</Card>
```

## Naming Conventions

You may encounter dotted naming patterns in online examples like this:

```tsx
<Example>
  <Example.A />
  <Example.B />
</Example>
```

The dotted convention causes issues with React Server Components (RSC). I see no reason for us to use those but theres no harm in future proofing anyway. Instead, use a flat naming pattern:

```tsx
<Example>
  <ExampleA />
  <ExampleB />
</Example>
```

## Further Reading
- https://en.paradigmadigital.com/dev/compound-components-elegant-robust-simple-way-avoid-prop-drilling-react-apps/