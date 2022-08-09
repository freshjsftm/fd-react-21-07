//import { Component } from "react";
import { UserContext, ThemeContext } from "../../contexts";

export const WithTheme = (InnerComponent)=> (props) => (
  <ThemeContext.Consumer>
    {([theme, setTheme]) => <InnerComponent theme={theme} setTheme={setTheme} {...props}/>}
  </ThemeContext.Consumer>
);

export const WithUser = (InnerComponent)=> (props) => (
  <UserContext.Consumer>
    {(user) => <InnerComponent user={user} {...props}/>}
  </UserContext.Consumer>
);

// export const WithTheme = (InnerComponent) => {
//   function WrappedComponentTheme(props) { 
//     return (<ThemeContext.Consumer>
//       {([theme, setTheme]) => (
//         <InnerComponent theme={theme} setTheme={setTheme} {...props} />
//       )}
//     </ThemeContext.Consumer>)
//   }
//   return WrappedComponentTheme;
// };

// export const WithUser = (InnerComponent) => {
//   class WrappedComponentUser extends Component {
//     render() {
//       return (
//         <UserContext.Consumer>
//           {(user) => <InnerComponent user={user} {...this.props} />}
//         </UserContext.Consumer>
//       );
//     }
//   }
//   return WrappedComponentUser;
// };
