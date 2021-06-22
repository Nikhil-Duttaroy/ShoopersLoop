import { React ,Component} from 'react';
import { ErrorImageOverlay , ErrorImageContainer , ErrorImageText } from './ErrorBoundary.styles';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render(){
      if(this.state.hasError){
          return (
            <ErrorImageOverlay>
              <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png'></ErrorImageContainer>
              <ErrorImageText>Sorry This Page Is Broken.</ErrorImageText>
            </ErrorImageOverlay>
          );
      }
      return this.props.children;
  }

}

export default ErrorBoundary

