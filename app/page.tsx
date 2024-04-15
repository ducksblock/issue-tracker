import { Link, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Text size='6' weight='medium'>Welcome to the Issue Tracker!</Text>
      <Text size='4'>Go to the <Link href="/issues" weight='medium'>Issues</Link> tab to get started</Text>
    </div>
  );
}
