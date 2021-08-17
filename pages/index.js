import { Button } from '../src/components/atoms/Button';
import { Heading } from '../src/components/atoms/Heading';
import { Text } from '../src/components/atoms/Text/Text';
import { Paragraph } from '../src/components/atoms/Paragraph';
import { FullLogo } from '../src/components/atoms/Logo';
import { LogoIcon } from '../src/components/atoms/Logo';
import { Card } from '../src/components/atoms/Card';
import { PageNavigation } from '../src/components/molecules/Navigation';

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen">
      <PageNavigation />
    </div>
  );
}
