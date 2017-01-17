/* @flow */

// Reducers shared between "main" and "public" apps

import auth from "metabase/auth/auth";

/* ducks */
import metadata from "metabase/redux/metadata";
import requests from "metabase/redux/requests";
import undo from "metabase/redux/undo";

/* user */
import { currentUser } from "metabase/user";

export default {
    // global reducers
    auth,
    currentUser,
    metadata,
    requests,
    undo,
};