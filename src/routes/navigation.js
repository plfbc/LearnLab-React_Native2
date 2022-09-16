import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Views from '../view';

const MainStack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName='OnboardingFirstPage'
      screenOptions={{ headerShown: false }}
    >
        {/* FAZER A LOGICA DESSE DOIS QUNADO FOR IMPLEMENTAR A LOGICA => Views.Course.SignUp */}
        {/* <MainStack.Screen name='Course' component={Views.AuthenticationScreen} />
        <MainStack.Screen name='SignCourse' component={Views.AuthenticationScreen} /> */}
        <MainStack.Screen name='Home' component={Views.Home} />
        <MainStack.Screen name='OnboardingFirstPage' component={Views.Onboarding.FirstPage} />
        <MainStack.Screen name='OnboardingSecondPage' component={Views.Onboarding.SecondPage} />
        <MainStack.Screen name='OnboardingThirdPage' component={Views.Onboarding.ThirdPage} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Navigation;
