#!/usr/bin/env bash
# -*- coding: utf-8 -*-
#
# Copyright (C) 2022 CERN.
# Copyright (C) 2022-2023 KTH Royal Institute of Technology.
#
# Invenio App RDM is free software; you can redistribute it and/or modify it
# under the terms of the MIT License; see LICENSE file for more details.

# Usage:
#   ./run-js-linter.sh [args]

# Arguments
# -i|--install: installs eslint-config-invenio
# -f|--fix: run eslint with the --fix option
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

for arg in $@; do
	case ${arg} in
		-i|--install)
			npm install --no-save --no-package-lock @inveniosoftware/eslint-config-invenio@^2.0.0
			;;
		-f|--fix)
			npx eslint -c .eslintrc.yml invenio_requests/**/*.js --fix
			;;
		*)
			printf "Argument ${RED}$arg${NC} not supported\n"
			exit;;
	esac
done

printf "${GREEN}Run eslint${NC}\n"
npx eslint -c .eslintrc.yml invenio_requests/**/*.js