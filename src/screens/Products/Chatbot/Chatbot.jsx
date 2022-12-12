import React from "react";
import * as s from "./Chatbot.style";
import HomeVideo from "@Assets/videos/connections.mp4";
import ProductVideoSrc from "@Assets/videos/chatbot.mp4";

const Chatbot = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>Chatbot System</s.ProductPageHeader>
                        <s.ProductPageText>Remote Health Monitoring</s.ProductPageText>
                    </s.ProductRow>
                    <s.PageVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
                </s.ProductTop>
                <s.ProductContentRowGradient>
                    <s.ProductContentRowInner>
                        <s.ProductContentLeft>
                            <s.ProductTitle>
                                Product <br/> <span style={{color:"white"}}>Overview</span>
                            </s.ProductTitle>
                            <s.ProductText style={{color:"white"}}>
                                At Gopher Industries we are creating a Chatbot system that works as a personal assistant for elderly people. This chatbot aims to allow the target audience to interact with the system and ask questions about their health and based on their intentions it will provide solutions. Our app, ‘MediBot’ allows users to adhere to a routine and promote the self-management of their condition without constant doctor or nurse supervision.<br/><br/>
                                Furthermore, our chatbot will help elderly people to keep records of their reports, handle frequent queries and give quick responses to common queries. Moreover, to accommodate elderly people, our chatbot app has several features which comply with their accessibility requirements. For instance speech to text and text to speech, minimal colours,block writing and more to make the chatbot interactive as well as user-friendly
                            </s.ProductText>
                        </s.ProductContentLeft>
                        <s.ProductContentRight>
                            <s.ProductVideo src={ProductVideoSrc} controls={true} />
                        </s.ProductContentRight>
                    </s.ProductContentRowInner>
                </s.ProductContentRowGradient>
                <s.ProductContentRow>
                    <s.ProductContentRowInner>
                        <s.ProductContent>
                            <s.ProductTitle style={{color:"rgb(92, 118, 141)", paddingBottom:"20px"}}>
                                Product <span style={{color:"rgb(26, 180, 252)"}}>Features</span>
                            </s.ProductTitle>
                            <s.ProductSubColumns>
                                <s.ProductText>
                                    <strong>Pain Assessment:</strong><br/><br/>This will be valuable addition by which pain tracking can be done more efficiently and help in listing down the trigger points for specific users which results in better-personalised care. Moreover, a separate assessment will be done to check the level of pain and lastly, all these additional data will be shared with a pain monitoring app for better caretaking of elderly patients.
                                </s.ProductText>
                                <s.ProductText>
                                    <strong>Diet Plan and Data Manipulation:</strong><br/><br/>This feature will help the elderly access their recommended diet plan and perform tasks like grocery shopping and food preparation more efficiently via chatbot. The recommended meal at a specific time can be spoken out by a chatbot which will help the elderly in maintaining their diet.
                                </s.ProductText>
                                <s.ProductText>
                                    <strong>Water Consumption Tracking:</strong><br/><br/>This feature will help the elderly to keep track of their daily water consumption which will help them to stay fit and healthy

                                </s.ProductText>
                                <s.ProductText>
                                    <strong>Data extraction and representation: </strong><br/><br/>This feature will make elderly people's life more organised because by using their voice commands in the chatbot they can easily access their files such as test results, and financial planning and take necessary steps accordingly.

                                </s.ProductText>
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
            </s.ProductInnerContainer>
        </s.ProductContainer>

    );
};

export default Chatbot;
