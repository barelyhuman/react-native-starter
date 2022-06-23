#!/bin/bash 

set -exo pipefail

sudo apt update -y 

# dev essential
sudo apt-get install -y curl wget build-essential openssl libreadline8 libreadline-dev curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison subversion pkg-config

# install node and nvm 
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
. ~/.nvm/nvm.sh
nvm install
nvm use

# install pnpm
npm i -g pnpm@6.32.10

# Install chruby:
wget -O chruby-0.3.9.tar.gz https://github.com/postmodern/chruby/archive/v0.3.9.tar.gz
tar -xzvf chruby-0.3.9.tar.gz
cd chruby-0.3.9/
sudo make install
cd ..
. /usr/local/share/chruby/chruby.sh


# install ruby installer
wget -O ruby-install-0.8.3.tar.gz https://github.com/postmodern/ruby-install/archive/v0.8.3.tar.gz
tar -xzvf ruby-install-0.8.3.tar.gz
cd ruby-install-0.8.3/
sudo make install

# change to current chruby
ruby-install $(cat .ruby-version)
. /usr/local/share/chruby/chruby.sh
chruby $(cat .ruby-version)

# install needed stuff 
gem install bundler 
bundle install 
bundle update


