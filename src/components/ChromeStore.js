import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Divider,
  Stack,
  Center,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../Assets/logo.svg';
import { BiBadgeCheck, BiAward } from 'react-icons/bi';
import star from '../Assets/star.svg';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import frame from '../Assets/Frame.png';
import arrow from '../Assets/arrow.svg';

const ChromeStore = () => {
  return (
    <>
      <Container maxW={'8xl'}>
        <Box w={'100%'}>
          <Flex mt={'5rem'} gap={'32%'}>
            <Flex>
              <Box>
                <Image src={logo} alt="Logo" ml={'7rem'} mr={'1rem'} />
              </Box>
              <Box>
                <Text
                  fontSize={'3rem'}
                  fontWeight={'600'}
                  color={'#000'}
                  fontFamily={"'Sora', sans-serif"}
                >
                  HelpMeOut
                </Text>
                <Flex
                  fontSize={'1.25rem'}
                  fontWeight={'500'}
                  color={'#0E75C5'}
                  gap={'1.25rem'}
                  mt={'0.5rem'}
                >
                  <Flex gap={'0.5rem'}>
                    <Box mt={'3px'}>
                      <BiBadgeCheck
                        color="hsla(206, 87%, 41%, 1)"
                        fontSize={'1.5rem'}
                      />
                    </Box>
                    <Text>Helpmeout.com</Text>
                  </Flex>
                  <Flex gap={'0.5rem'}>
                    <Box mt={'3px'}>
                      <BiAward
                        color="hsla(206, 87%, 41%, 1)"
                        fontSize={'1.5rem'}
                      />
                    </Box>
                    <Text>Featured</Text>
                  </Flex>
                </Flex>
                <Flex
                  mt={'1.5rem'}
                  gap={'0.5rem'}
                  fontSize={'1.125rem'}
                  fontWeight={'400'}
                  color={'hsla(0, 0%, 38%, 1)'}
                >
                  <Image src={star} alt="star" />
                  <Text color={'#000'}>252</Text>
                  <Box transform={'rotate(180deg)'}>
                    <AiOutlineInfoCircle fontSize={'1.5rem'} />
                  </Box>
                  <Stack direction="row" gap={' 0.75rem'}>
                    <Divider
                      orientation="vertical"
                      w={'0.0625rem'}
                      background="black"
                    />
                    <Text color={'#0E75C5'}>Productivity</Text>
                    <Divider
                      orientation="vertical"
                      background="black"
                      w={'0.0625rem'}
                    />
                    <Text>80,000+ users</Text>
                  </Stack>
                </Flex>
              </Box>
            </Flex>
            <Button
              background={'#0E75C5'}
              borderRadius={'0.25rem'}
              p={' var(--Inner-Radius, 0.75rem) 1rem'}
              color={'white'}
            >
              Add to Chrome
            </Button>
          </Flex>
          <Center>
            <Divider
              mt={'3rem'}
              width={'72.25rem'}
              background={'#E8E8E8'}
              height={'1px'}
            />
          </Center>
          <Flex
            justifyContent={'center'}
            gap={'2.5rem'}
            mt={'3.25rem'}
            fontSize={'1.25rem'}
            fontWeight={'500'}
            color={'#606060'}
          >
            <Text
              _hover={{
                color: 'blue',
                background: 'white',
                borderRadius: '1.5rem',
                boxShadow: '4px 4px 40px 0px rgba(20, 20, 20, 0.10)',
                padding: '0.75rem 1rem ',
                cursor: 'pointer',
              }}
            >
              Overview
            </Text>
            <Text
              _hover={{
                color: 'blue',
                background: 'white',
                borderRadius: '1.5rem',
                boxShadow: '4px 4px 40px 0px rgba(20, 20, 20, 0.10)',
                padding: '0.75rem 1rem ',
                cursor: 'pointer',
              }}
            >
              Privacy practices
            </Text>
            <Text
              _hover={{
                color: 'blue',
                background: 'white',
                borderRadius: '1.5rem',
                boxShadow: '4px 4px 40px 0px rgba(20, 20, 20, 0.10)',
                padding: '0.75rem 1rem ',
                cursor: 'pointer',
              }}
            >
              Review
            </Text>
            <Text
              _hover={{
                color: 'blue',
                background: 'white',
                borderRadius: '1.5rem',
                boxShadow: '4px 4px 40px 0px rgba(20, 20, 20, 0.10)',
                padding: '0.75rem 1rem ',
                cursor: 'pointer',
              }}
            >
              Related
            </Text>
          </Flex>
          <Flex
            justifyContent={'space-around'}
            mt={'2.75rem'}
            background={'#F0F0F0'}
          >
            <Box>
              <Image
                src={arrow}
                alt="previous"
                transform={'scaleX(-1)'}
                background={'white'}
                width={'4rem'}
                height={'4rem'}
                borderRadius={'50%'}
                position={'absolute'}
                bottom={'5rem'}
              />
            </Box>
            <Box>
              <Image src={frame} alt="App frame" mt={'2.75rem'} />
            </Box>
            <Box>
              <Image
                src={arrow}
                alt="next"
                background={'white'}
                width={'4rem'}
                height={'4rem'}
                borderRadius={'50%'}
                position={'absolute'}
                bottom={'5rem'}
                right={'2rem'}
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default ChromeStore;
