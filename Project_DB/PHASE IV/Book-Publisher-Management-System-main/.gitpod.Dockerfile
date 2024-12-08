FROM gitpod/workspace-full

# Install MySQL client
RUN sudo apt-get update && \
    sudo apt-get install -y default-mysql-client && \
    sudo apt-get clean