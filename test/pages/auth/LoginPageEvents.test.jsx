import { fireEvent, getByRole, render,screen } from "@testing-library/react";
import { LoginPage } from "../../../src/pages/auth/LoginPage";
import { AuthContext } from "../../../src/contexts/AuthContext";


describe('PRUEBA EN <LoginPageEvents/>',() => {

    const user = 'Flor'
    test('validar si el input tiene un valor', () => {

       render(<LoginPage/>)
    //    screen.debug();

       const userInput = screen.getByRole('textbox',{name: 'Username'});
       const loginBtn = screen.getByRole('button',{name: 'INGRESAR'});

       //los roles se encuentas consologeando screen.getByRole(); 

       fireEvent.input(userInput,{target: {value: user}})
       fireEvent.click(loginBtn);

       expect(userInput.value).toBeTruthy(); 
       expect(userInput.value).toBe(user); 

    
    });

 test('Ejecutar la funcio del login cpn el context', () => {

        loginMkp = jest.fn();

        render (<AuthContext.Provider value={{login : loginMkp}}> 
                  <LoginPage/> 
               </AuthContext.Provider>)

       const userInput = screen.getByRole('textbox',{name: 'Username'});
       const loginBtn = screen.getByRole('button',{name: 'INGRESAR'});

       fireEvent.input(userInput,{target: {value: user}})
       fireEvent.submit(loginBtn);

       expect(loginMkp).toHaveBeenCalled();
      //  expect(loginMkp).toHaveBeenCalledTimes(1); //que se ejecute mas de una vez
      //  expect(loginMkp).toHaveBeenCalledWith(user); //la forma de enviar los paramentros dinamicos

    
    })
    
    
});
    