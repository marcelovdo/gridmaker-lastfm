
// http://www.last.fm/api/auth/?api_key=xxx&cb=http://example.com
    // <callback_url>/?token=xxxxxxx

// auth.getSession
    // api_key: Your 32-character API Key.
    // token: The authentication token received at your callback url as a GET variable.
    // api_sig: Your 32-character API method signature, as explained in Section 6

    // sk (Required) : The session key returned by auth.getSession service.
    // api_key (Required) : Your 32-character API key.
    // api_sig (Required) : Your API method signature, constructed as explained in Section 6