describe('PRUEBA EN <demotest/>',() => {


    test('test', () => {
    
    // 1-Incializacion / Objeto de prueba
    const msgA = 'Hola Mundo'
    
    //2- Estimulo / prueba
    const msgB = msgA.trim();
    
    
    //3- Respuesta test / validación
    expect(msgA).toBe(msgB);
    
    })
    
    });
    