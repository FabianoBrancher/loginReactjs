import React from "react";

import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from '../services/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = isAuthenticated();

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    < Route
      {...rest}
      render={props => (
        <Component {...props} />
      )
      }
    />
  );
}
