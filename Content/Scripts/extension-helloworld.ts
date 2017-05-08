function main(){
    console.log("hello, world!")
    return ()=>{
        return 
    }
}

import bootstrap from "./bootstrap"

// bootstrap to initiate live-reloading dev env.
try {
    module.exports = () => {
        let cleanup:Function|null = null

        // wait for map to be loaded.
        process.nextTick(() => cleanup = main());

        // live-reloadable function should return its cleanup function
        return () => (<Function>cleanup)()
    }
}
catch (e) {
    
    bootstrap('extension-helloworld')
}