// This file is part of InvenioRequests
// Copyright (C) 2022 CERN.
//
// Invenio RDM Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import { AppMedia } from "@js/invenio_theme/Media";
import { i18next } from "@translations/invenio_requests/i18next";
import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";
import {
  RequestAcceptButton,
  RequestCancelButton,
  RequestDeclineButton,
} from "./Buttons";

const { MediaContextProvider, Media } = AppMedia;

// components for most common actions, used in other modules, not explicitly in invenio-requests

export const RequestDeclineModalTrigger = ({
  onClick,
  loading,
  ariaAttributes,
  size,
  className,
}) => {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <RequestDeclineButton
          onClick={onClick}
          loading={loading}
          disabled={loading}
          size={size}
          className={className}
          {...ariaAttributes}
        />
      </Media>
      <Media at="mobile">
        <Dropdown.Item icon="cancel" onClick={onClick} content={i18next.t("Decline")} />
      </Media>
    </MediaContextProvider>
  );
};

RequestDeclineModalTrigger.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  ariaAttributes: PropTypes.object,
  size: PropTypes.string,
  className: PropTypes.string,
};

RequestDeclineModalTrigger.defaultProps = {
  size: "mini",
  className: "ml-5",
};

export const RequestAcceptModalTrigger = ({
  onClick,
  requestType,
  loading,
  ariaAttributes,
  size,
  className,
}) => {
  const requestIsCommunitySubmission = requestType === "community-submission";
  const text = requestIsCommunitySubmission
    ? i18next.t("Accept and publish")
    : i18next.t("Accept");
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <RequestAcceptButton
          onClick={onClick}
          loading={loading}
          disabled={loading}
          requestType={requestType}
          size={size}
          className={className}
          {...ariaAttributes}
        />
      </Media>
      <Media at="mobile">
        <Dropdown.Item icon="checkmark" onClick={onClick} content={text} />{" "}
      </Media>
    </MediaContextProvider>
  );
};

RequestAcceptModalTrigger.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  ariaAttributes: PropTypes.object,
  size: PropTypes.string,
  className: PropTypes.string,
};

RequestAcceptModalTrigger.defaultProps = {
  size: "mini",
  className: "ml-5",
};

export const RequestCancelModalTrigger = ({
  onClick,
  loading,
  ariaAttributes,
  size,
  className,
}) => {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <RequestCancelButton
          content={i18next.t("Cancel")}
          onClick={onClick}
          loading={loading}
          disabled={loading}
          size={size}
          className={className}
          negative={false}
          {...ariaAttributes}
        />
      </Media>
      <Media at="mobile">
        <Dropdown.Item icon="cancel" onClick={onClick} content={i18next.t("Cancel")} />
      </Media>
    </MediaContextProvider>
  );
};

RequestCancelModalTrigger.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  ariaAttributes: PropTypes.object,
  size: PropTypes.string,
  className: PropTypes.string,
};

RequestCancelModalTrigger.defaultProps = {
  size: "mini",
  className: "ml-5",
};
