import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Button } from 'src/components/atoms/Button';
import { Heading } from 'src/components/atoms/Heading';
import { Icon } from 'src/components/atoms/Icon';
import { Input } from 'src/components/atoms/Input';
import { Link } from 'src/components/atoms/Link';
import { Text } from 'src/components/atoms/Text';

const Intro = () => {
  const router = useRouter()
  const handleScrollBottom = () => {
    router.push('#footer')
  }

  return (
    <div className="relative flex flex-col">
      <div className="px-3 lg:px-16 sm:mt-6 md:mt-0 flex justify-between flex-wrap sm:flex-nowrap">
        <div className="flex flex-col justify-center mt-10 sm:w-auto md:my-28">
          <div className="flex flex-col xx:w-full sm:w-11/12">
            <Heading
              size="6xl"
              className="font-bold xx:text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl xl:leading-extra-loose"
            >
              Discover and Connect Instantly
            </Heading>
            <Text className="my-4 ml-1 xx:text-base" appearance="subtle">
              The fastest and reliable way to get things done
            </Text>
          </div>
          <form className="flex rounded-lg xx:w-full sm:pr-2 md:w-11/12 lg:w-10/12">
            <Input
              placeholder="for popular services around you"
              size="large"
              icon="search"
              minWidth={100}
              outline={false}
              className="rounded-l-lg rounded-r-none"
            />
            <Button
              radius="pill"
              size="large"
              appearance="primary"
              className="rounded-l-none xx:px-3 xx:text-base xx:leading-7 lg:px-8 outline-none"
            >
              Search
            </Button>
          </form>
          <div className="flex items-center flex-wrap my-3 ml-1 overflow-hidden">
            <Text className="mr-2 my-1 xx:text-xs" appearance="subtle" size="sm" weight="light">
              Popular:
            </Text>
            <Button
              size="tiny"
              radius="square"
              outlined
              appearance="primary"
              className="mx-1 py-4 px-1 my-1 xx:px-1 xx:py-1 xx:text-xs lg:py-4 lg:px-2"
              defaultText
            >
              <Text
                size="sm"
                weight="light"
                className="whitespace-nowrap xx:text-xs xx:leading-5 lg:leading-1"
              >
                Plumbering
              </Text>
            </Button>
            <Button
              size="tiny"
              radius="square"
              outlined
              appearance="primary"
              className="mx-1 py-4 px-1 my-1 xx:px-1 xx:py-1 xx:text-xs lg:py-4 lg:px-2"
              defaultText
            >
              <Text
                size="sm"
                weight="light"
                className="whitespace-nowrap xx:text-xs xx:leading-5 lg:leading-1"
              >
                Haircut Home Service
              </Text>
            </Button>
            <Button
              size="tiny"
              radius="square"
              outlined
              appearance="primary"
              className="mx-1 py-4 px-1 my-1 xx:px-1 xx:py-1 xx:text-xs lg:py-4 lg:px-2"
              defaultText
            >
              <Text
                size="sm"
                weight="light"
                className="whitespace-nowrap xx:text-xs xx:leading-5 lg:leading-1"
              >
                Generator Repair
              </Text>
            </Button>
            <Link
              size="sm"
              className="ml-2 whitespace-nowrap xx:text-xs xx:leading-5 lg:text-md"
              appearance="primary"
              href="#"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="pt-6 md:py-24 sm:w-2/3 lg:w-9/12 flex justify-end">
          <img src="/assets/home/home-intro-img.png" alt="" width="900px" />
        </div>
      </div>
      <div className="flex flex-col items-center relative my-10 mb-12 md:mb-0 h-6">
        <button onClick={handleScrollBottom} className="absolute top-0 md:-top-20 bg-white border-none rounded-full shadow-lg p-3 flex justify-items-center items-center">
          <Icon name="south" />
        </button>
      </div>
    </div>
  );
};

export default Intro;
