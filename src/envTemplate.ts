const arg = require('./argTemp')

const PORT = arg.PORT

const envTemplate:string = 
`PORT=${PORT}
MONGO_URI_= ENTER YOUR URI HERE`

  export default envTemplate;