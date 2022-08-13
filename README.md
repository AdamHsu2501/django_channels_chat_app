<!-- ABOUT THE PROJECT -->
# django_channels_chat_app

![](https://i.imgur.com/HUvduUO.png)
### Built With

* Django: Implement a chat applications with Websocket and APIs
* React.js: Builds simple view pages to interact with APIs



<!-- GETTING STARTED -->
# Getting Started
### Prerequisites

* Install [Python](https://www.python.org/)
    * cmd:
        ```
        pip install pipenv
        ```
* Install [Docker](https://www.docker.com/)
    * Install and Run Redis in Docker
        1. cmd: Download Redis image in Docker
            ```
            docker pull redis
            ```
        2. cmd: Create container for Redis image and run with port 6379
            ```
            docker run --name redis-lab -p 6379:6379 -d redis
            ```
        3. cmd: Check container
            ```
            docker ps
            ```
    * Test Redis
        1. cmd: into container. Replace ```<containerID>```  by container id from ```docker ps```
            ```
            docker exec -it <containerID> bash
            ```
        2. cmd: run redis-cli
            ```
            redis-cli
            ```
        3. cmd: test redis
            ```
            ping
            // pong
            ```


### Installation
1. cmd: Clone the repo
   ```
   git clone https://github.com/AdamHsu2501/django_channels_chat_app.git
   ```
2. Run backend server
   1. cmd: into folder
        ```
        cd django_channels_chat_app
        ```
   2. cmd: Install virtual environment
        ```
        pipenv install
        ```
   3. cmd: Run vitrual environment
        ```
        pipenv shell
        ```
   4. cmd: Start backend server
        ```
        cd config
        python manage.py runserver
        ```
3. Run frontend app in another cmd with administrator
   1. cmd: into folder. Ignore if cmd already in django_channels_chat_app folder
        ```
        cd django_channels_chat_app
        ```
   2. cmd: Run vitrual environment. Ignore if cmd already in virtual environment
        ```
        pipenv shell
        ```
   3. cmd: Into frontend folder and install npm
        ```
        cd frontend
        nodeenv -p
        ```
   4. cmd: Install packages
        ```
        npm install
        ```
   5. cmd: Run app
        ```
        npm start
        ```
