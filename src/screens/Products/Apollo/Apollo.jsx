import React from "react";
import * as s from "./Apollo.style";
import HomeVideo from "@Assets/videos/connections.mp4";
import ProductVideoSrc from "@Assets/videos/apollo.mp4";

const Apollo = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>Apollo</s.ProductPageHeader>
                        <s.ProductPageText>Standardised Patient History Database</s.ProductPageText>
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
                                At Gopher Industries we are developing a data lake (i.e., central repository) that various applications within Gopher Industries can utilise for access, storage and retrieval of sensitive personal and health information collated through the various applications offered by Gopher Industries. Our project ‘Apollo’ employs cloud technologies and cybersecurity practices to ensure the confidentiality, integrity and availability of sensitive health data required for the various applications developed internally within Gopher Industries.<br/><br/> While Apollo is currently designed for internal use within Gopher Industries, further development of the Apollo project could facilitate access to third parties (e.g., General Practitioners, Aged and Healthcare providers) through APIs (Application Programming Interface) for better health outcomes for aged persons.<br/><br/>Apollo’s primary market are the internal development teams within Gopher Industries with plans to expand our scope to include authorised GPs, Aged and Healthcare providers.
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
                            <s.ProductTitle style={{color:"rgb(92, 118, 141)"}}>
                                Product <span style={{color:"rgb(26, 180, 252)"}}>Features</span>
                            </s.ProductTitle>
                            <s.ProductSubColumns>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Authentication/Authorisation to maintain confidentiality/privacy</li>
                                        <li>Audit Logging to track user access and changes to data lake</li>
                                        <li>Data Ingestion (i.e., ability to extract data from various sources)</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Scalable Data Storage</li>
                                        <li>Ability to store structured, semi-structured and unstructured data</li>
                                        <li>Data Manageability</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Data Security</li>
                                        <li>Data Analytics</li>
                                        <li>Data Retrieval</li>
                                    </s.FeatureList>
                                </s.ProductText>
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
                <s.ProductContentRowBlue>
                    <s.ProductContentRowInner style={{width:'100%'}}>
                        <s.ProductContent style={{display:'flex', flexDirection: 'column', width:'100%'}}>
                            <s.ProductTitleWhite>
                                Product Benefits
                            </s.ProductTitleWhite>
                            <s.ProductSubColumnsWhite>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Easy for Gopher Industries applications to collect, store and retrieve data</li>
                                        <li>Continuous access to stored data regardless of time or location</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Enhanced data integration enabling information to be shared between various Gopher Industries applications/services</li>
                                        <li>Consolidates sensitive information into a single repository, enhancing security</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureListWhite>
                                        <li>Universal data security standards across Gopher Industries (i.e., no weak links)</li>
                                    </s.FeatureListWhite>
                                </s.ProductText>
                            </s.ProductSubColumnsWhite>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRowBlue>
            </s.ProductInnerContainer>
        </s.ProductContainer>

    );
};

export default Apollo;
