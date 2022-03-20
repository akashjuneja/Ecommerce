//redis store
//redis client

//packages to use
//1. express-session
//2. redis
//3. connect-redis

const redis=require('redis');
const connectRedis=require("connect-redis");
const session=require("express-session")

const redisStore=connectRedis(session)
const redisClient=redis.createClient({
    host:"localhost",
    port: 6379
})

redisClient.on('error',(err)=>{
    console.log('could not connect to redis',err)
})

redisClient.on('connect',()=>{
    console.log('connected to Redis')
})

module.exports={
    redisClient,
    redisStore,
    session
}