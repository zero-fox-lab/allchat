PODMAN:=$(shell command -v podman 2>/dev/null)
IMG=allchat-web

init:
ifeq ($(PODMAN),)
	$(error "podman not installed")
endif
	podman build -t $(IMG) .