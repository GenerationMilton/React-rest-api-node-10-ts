import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name :'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title:'REST APU Node.js / Express / TypeScript',
            version: "1.0.0",
            description: "API Docs for Products"
        }
    }, 
    apis: ['./src/router.ts']
}
const swaggerSpect = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions ={
    customCss: `
        .topbar-wrapper .link{
            content: url('https://img.freepik.com/vector-gratis/ilustracion-api-dibujada-mano_23-2149388656.jpg?t=st=1769737911~exp=1769741511~hmac=dac604ac1d307a3d3e858f64121a29558c74edb97eb805c42f94dc27b6c64051');
            height: 80px;
            width: auto;
        }
        .swagger-ui .topbar a{
            background-color: #2b3b45;
            max-width: 170px
        }
    `,
    customSiteTitle: 'Documentación REST API Express / TypeScript'
}

export default swaggerSpect
export {
    swaggerUiOptions
}