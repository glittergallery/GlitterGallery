FROM fedora:21
MAINTAINER Ahmed AbouElhamayed <alwahsh.ahmed@gmail.com>

# Install needed packages.
RUN yum -y update
RUN yum install -y gnupg tar gcc mysql-devel ImageMagick-devel cmake

# Install ruby
RUN gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
RUN curl -sSL https://get.rvm.io | bash -s stable
RUN /bin/bash -c -l "rvm requirements"
RUN /bin/bash -c -l "rvm install ruby-2.2.0"
RUN /bin/bash -c -l "rvm use 2.2.0"
RUN /bin/bash -c -l "gem install bundler --no-ri --no-rdoc"


# Create a directory for the app.
RUN mkdir /srv/
WORKDIR /srv/

# Allow reaching via port 3000.
EXPOSE 3000

# Install required gems.
ADD Gemfile /srv/Gemfile
ADD Gemfile.lock /srv/Gemfile.lock
RUN /bin/bash -c -l "bundle install"

# Copy the application to the container.
ADD . /srv

# Start the server
CMD /bin/bash -c -l "rails s"
