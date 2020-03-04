import dev from './dev'
import prod from './prod'

let config;

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
	config = dev
}else{
	config = prod
}
export default config
