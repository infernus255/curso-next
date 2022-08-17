# NEXT JS COURSE

- ## 01-initial-demo

  initial configuration with typescript and docker image

  ### Docker

  ***

  Dockerfile to create docker image:

  https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

  Add to next js config:

  `experimental: { outputStandalone: true, },`

  Add port to start script

  ` "scripts": { ... "start": "next start -p ${PORT:=3000}", ... },`

  Comandos

  ```bash
  # build docker image with DockerFile inside folder
  docker build -t nextjs-initial .

  # run docker image in port localpc-port:container-port
  docker run --name=next-app -p 3000:3000 nextjs-initial
  ```

- ## 02-pokemon-static
  API
  https://pokeapi.co/
