import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Container } from "../../components";
import { 
    profileDefault, 
    firstSlide,
    secSlide,
    thrSlide,
    whoWeAre,
    whoWeAre1,
    whoWeAre2,
    whoWeAre3,
    course1,
    course2,
    course3
} from "../../assets/media";    
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const slides = [firstSlide,secSlide,thrSlide];
const slides2 = [{
    img: whoWeAre,
    title: "Nossa história",
    description: "Aqui vamos falar brevemente sobre o projeto, como foi no início e como foi desenvolvida as atividades"
}, 
{
    img: whoWeAre1,
    title: "Nossa missão",
    description: "Aqui vamos falar brevemente sobre o projeto, como foi no início e como foi desenvolvida as atividades"
},
{
    img: whoWeAre2,
    title: "Nossa visão",
    description: "Aqui vamos falar brevemente sobre o projeto, como foi no início e como foi desenvolvida as atividades"
},
{
    img: whoWeAre3,
    title: "Alguns dos nossos valores",
    description: "Aqui vamos falar brevemente sobre o projeto, como foi no início e como foi desenvolvida as atividades"
}];
const slides3 = [{
    img: course1,
    title: "Desenvolvimento web",
    description: "Criar aplicações WEB: Do front ao back-end e banco de dados com HTML5, CSS3, BootStrap 4, JS, ES6, ES7, PHP 7, OO, MySQL, JQuery, MVC, API, IONIC e Wordpress."
},{
    img: course2,
    title: "Figma para iniciantes",
    description: "Criar aplicações WEB: Do front ao back-end e banco de dados com HTML5, CSS3, BootStrap 4, JS, ES6, ES7, PHP 7, OO, MySQL, JQuery, MVC, API, IONIC e Wordpress."
},{
    img: course3,
    title: "Java para iniciantes",
    description: "Criar aplicações WEB: Do front ao back-end e banco de dados com HTML5, CSS3, BootStrap 4, JS, ES6, ES7, PHP 7, OO, MySQL, JQuery, MVC, API, IONIC e Wordpress."
}]

const Home = ({navigation, params}) => {
    const handleProfileImage = () => {
        console.log("handleProfileImage")
    }

    return (
        <ScrollView>
            <Container.BoxFlex>
            <Container.BoxBetween
                style={{paddingHorizontal: 20}}
            >
                <View>
                    <Text
                        style={{
                            fontFamily: "Montserrat_300Light",
                            fontSize: 20
                        }}
                    >Olá,</Text>
                    <Text
                    style={{
                        fontFamily: "Montserrat_600SemiBold",
                        fontSize: 20
                    }}
                    >Arnaldo</Text>
                </View>
                <TouchableOpacity
                    onPress={() => handleProfileImage()}
                >
                    <Image 
                        source={profileDefault}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 20
                        }}
                    />
                </TouchableOpacity>
            </Container.BoxBetween>

            <ScrollView
                horizontal
                style={{
                    marginVertical: 20,
                }}
                showsHorizontalScrollIndicator={false}
            >
            {
                slides.map((slide, index) => {
                    const key = `${index}-key`
                    console.log(key)
                    return(
                        <Image 
                            key={key}
                            source={slide}
                            style={{
                                height: 200,
                                width: 300,
                                marginRight: 10,
                                borderRadius: 5
                            }}
                        />
                    )
                })
            }
            </ScrollView>

            <Container.BoxBetween>
                <Container.BoxCenter >
                    <AntDesign 
                        name="like2" 
                        size={24} 
                        color="#F2637E"
                        style={{
                            marginVertical: 10
                        }}
                        />
                    <Text 
                        style={{
                            textAlign: "center",
                            color: "#F2637E"
                            }}>Cursos {'\n'}gratuitos</Text>
                </Container.BoxCenter>
                <Container.BoxCenter>
                    <Feather 
                        name="briefcase" 
                        size={24} 
                        color="#04BFBF" 
                        style={{
                            marginVertical: 10
                        }}/>
                    <Text 
                        style={{
                            textAlign: "center",
                            color: "#04BFBF"
                            }}>Mercado {'\n'} de trabalho</Text></Container.BoxCenter>
                <Container.BoxCenter>
                        <MaterialCommunityIcons 
                            name="brain" 
                            size={24} 
                            color="#FFAC2B"
                            style={{
                                marginVertical: 10
                            }} />
                    <Text
                        style={{
                            color: "#FFAC2B"
                        }}
                    >Cursos {'\n'}gratuitos</Text>
                </Container.BoxCenter>
            </Container.BoxBetween>

            <View
                style={{
                    marginVertical: 30
                }}
            >
                <Text
                    style={{
                        color: "#04BFBF",
                        fontSize: 24,
                        fontFamily: "Montserrat_700Bold"
                    }}
                >Quem somos</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginVertical: 20,
                    }}>
                {
                    slides2.map((slide, index) => {
                        if(!slide) return 
                        const {img, title, description} = slide

                        const key = `key-${title}-${index}`
                        console.log(key)

                        return(
                            <View
                                key={key}
                                style={{
                                    width: 320,
                                    marginRight: 35,
                                    alignItems: "center"
                                }}
                            >
                                <Image 
                                    source={img}
                                    style={{
                                        height: 200,
                                        borderRadius: 5
                                    }}
                                />
                                <View
                                    style={{
                                        backgroundColor: "#CAF9F9",
                                        padding: 20,
                                        marginTop: 10,
                                        borderRadius: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "Montserrat_700Bold",
                                            fontSize:16
                                        }}
                                    >{title}</Text>
                                    <Text
                                        style={{
                                            fontFamily: "Montserrat_400Regular",
                                            fontSize: 14,
                                            color: "#464646"
                                        }}
                                    >{description}</Text>
                                </View>
                            </View>
                        )
                    })
                }
                </ScrollView>
            </View>
            
            <Text
                style={{
                    color: "#04BFBF",
                    fontSize: 24,
                    fontFamily: "Montserrat_700Bold"      
                }}
            >Novos Cursos</Text>
            {
                slides3.map((slide,index) => {
                    if(!slide) return 
                    const {img, title, description} = slide
                    const key = `key-${title}-${index}`

                    return(
                        <Container.BoxShadow key={key}>
                            <Image 
                                    source={img}
                                    style={{
                                        height: 200,
                                        borderRadius: 5
                                    }}
                                />
                        </Container.BoxShadow>
                    );
                })
            }
        </Container.BoxFlex>
        </ScrollView>
    );
}

export default Home;