# react-native
## Requirement
### Android Studio

#### Add follow lines to and ~/.zshrc

export ANDROID_HOME=$HOME/Android/Sdk

export PATH=$PATH:$ANDROID_HOME/tools

export PATH=$PATH:$ANDROID_HOME/tools/bin

export PATH=$PATH:$ANDROID_HOME/platform-tools

// Config khi bật máy ảo bằng terminal dùng alias nhanh hơn là việc gõ đường dẫn :v

function emulator { ( cd "$(dirname "$(whence -p emulator)")" && ./emulator "$@"; ) }

alias emu="$ANDROID_HOME/tools/emulator"

source ~/.zshrc


### Nodejs

## Install watchman
git clone https://github.com/facebook/watchman.git

cd watchman/

git checkout v4.9.0

sudo apt-get install -y autoconf automake build-essential python-dev libssl-dev libtool

./autogen.sh

./configure

make

sudo make install
## Install react-native
npm install -g react-native-cli

## Creat new application 
react-native init myFirstAppNative

cd myFirstAppNative

npm start

react-native run-android
