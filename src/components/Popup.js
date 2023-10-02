 /*global chrome*/
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Container,
  HStack,
  Switch,
  extendTheme,
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import smallLogo from '../Assets/smallLogo.svg';
import { AiOutlineSetting, AiOutlineCloseCircle } from 'react-icons/ai';

import monitor from '../Assets/moitor.svg';
import tab from '../Assets/tab.svg';
import video from '../Assets/video.svg';
import audio from '../Assets/audio.svg';
import * as ReactDOM from 'react-dom';

const customTheme = extendTheme({
  colors: {
    customColorScheme: {
      500: '#120B48', 
    },
  },
});

const Popup = () => {
 const [isCameraSwitchOn, setCameraSwitchOn] = useState(false);
 const [isAudioSwitchOn, setAudioSwitchOn] = useState(false);
 const [isRecording, setRecording] = useState(false); // Track recording state

 const isButtonEnabled = isCameraSwitchOn || isAudioSwitchOn;

 const startRecording = () => {
   // Get the active tab in the current window
   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
     if (tabs && tabs.length > 0) {
       const tabId = tabs[0].id;
       chrome.tabs.sendMessage(tabId,{ action: 'startRecording' });
       setRecording(true); // Update recording state
     }
   });
 };

 const stopRecording = () => {
   chrome.runtime.sendMessage({ action: 'stopRecording' });
   setRecording(false); // Update recording state
 };
  return (
    <>
      <Container maxW={'7xl'}>
        <ChakraProvider theme={customTheme}>
          <Box
            id="startrecording"
            boxShadow={'0px 4px 20px 0px rgba(0, 0, 0, 0.10)'}
            width={'18.75rem'}
            height={'27.4375rem'}
            background={'white'}
            mt={'5rem'}
            borderRadius={'1.5rem'}
            padding={'1.5rem'}
          >
            <Flex
              justify={'space-between'}
              // gap={'4rem'}
            >
              <HStack>
                <Image src={smallLogo} alt="logo" />
                <Text
                  fontSize={'1rem'}
                  fontWeight={'700'}
                  color={'#141414'}
                  fontFamily={"'Sora', sans-serif"}
                >
                  HelpMeOut
                </Text>
              </HStack>
              <HStack>
                <Box>
                  <AiOutlineSetting
                    fontSize={'1.25rem'}
                    color="hsla(247, 73%, 16%, 1)"
                  />
                </Box>
                <Box>
                  <AiOutlineCloseCircle
                    fontSize={'1.25rem'}
                    color="hsla(249, 14%, 74%, 1)"
                  />
                </Box>
              </HStack>
            </Flex>
            <Text
              fontSize={' 0.875rem'}
              fontWeight={'400'}
              color={'hsla(246, 29%, 33%, 1)'}
              w={'15rem'}
              mt={'1rem'}
            >
              This extension helps you record and share help videos with ease.
            </Text>
            <Flex
              justify={'center'}
              gap={'2rem'}
              mt={'2rem'}
              fontSize={' 0.875rem'}
            >
              <Box color={'hsla(246, 14%, 62%, 1)'}>
                <Image src={monitor} alt="Monitor" ml={'1.5rem'} />
                <Text fontWeight={'500'}>Full screen</Text>
              </Box>
              <Box color={'hsla(247, 73%, 16%, 1)'}>
                <Image src={tab} alt="Tab" ml={'1.5rem'} />
                <Text fontWeight={'600'}>Current Tab</Text>
              </Box>
            </Flex>
            <Flex
              border={'1px solid var(--primary-primary-600, #100A42)'}
              borderRadius={'0.75rem'}
              w={'15.75rem'}
              height={'3rem'}
              mt={'1.5rem'}
              fontSize={'0.875rem'}
              fontWeight={'500'}
              color={'hsla(246, 74%, 15%, 1)'}
              gap={'5rem'}
            >
              <HStack>
                <Image src={video} alt="video" ml={'1rem'} />
                <Text>Camera</Text>
              </HStack>
              <HStack>
                <Switch
                  colorScheme="customColorScheme"
                  size="lg"
                  onChange={e => setCameraSwitchOn(e.target.checked)}
                />
              </HStack>
            </Flex>
            <Flex
              border={'1px solid var(--primary-primary-600, #100A42)'}
              borderRadius={'0.75rem'}
              w={'15.75rem'}
              height={'3rem'}
              mt={'1.5rem'}
              fontSize={'0.875rem'}
              fontWeight={'500'}
              color={'hsla(246, 74%, 15%, 1)'}
              gap={'6rem'}
            >
              <HStack>
                <Image src={audio} alt="video" ml={'1rem'} />
                <Text>Audio</Text>
              </HStack>
              <HStack>
                <Switch
                  colorScheme="customColorScheme"
                  size="lg"
                  onChange={e => setAudioSwitchOn(e.target.checked)}
                />
              </HStack>
            </Flex>
            <Button
              id="startRecordingButton"
              w={'15.75rem'}
              height={'3.1875rem'}
              background={'hsla(247, 73%, 16%, 1)'}
              color={'white'}
              borderRadius={'0.75rem'}
              mt={'1.5rem'}
              isDisabled={!isButtonEnabled}
              onClick={isRecording ? stopRecording : startRecording}
            >
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button>
          </Box>
        </ChakraProvider>
      </Container>
    </>
  );
};

export default Popup;
ReactDOM.render(<Popup/>, document.getElementById('root'));