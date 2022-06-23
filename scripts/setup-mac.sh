#!/bin/bash 

set -exo pipefail

# install brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


# install node and nvm 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
. ~/.nvm/nvm.sh
nvm install
nvm use

# install pnpm
npm i -g pnpm@6.32.10

# Install chruby:
brew install chruby ruby-install

. $HOMEBREW_REPOSITORY/opt/chruby/share/chruby/chruby.sh

# change to current chruby
ruby-install $(cat .ruby-version)
. $HOMEBREW_REPOSITORY/opt/chruby/share/chruby/chruby.sh
chruby $(cat .ruby-version)

# install needed stuff 
gem install bundler 
bundle install 
bundle update


