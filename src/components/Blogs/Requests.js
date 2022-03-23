import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Helmet } from "react-helmet"

const Requests = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true })
    })
    return (
        <section className="text-gray-400 body-font" data-aos="fade">
            <Helmet>
                <title>S1D - Requests</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="http://siddhantshr.me/blogs/requests"
                />
                <meta property="og:title" content="S1D - Blogs" />
                <meta
                    property="og:description"
                    content="An HTTP request is made by a client, to a named host,
                    which is located on a server. The aim of the request is
                    to access a resource on the server."
                />
                <meta
                    property="og:image"
                    content={`${process.env.PUBLIC_URL}/assets/discord-devs.webp`}
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://siddhantshr.me/blogs/requests"
                />
                <meta property="twitter:title" content="S1D - Requests" />
                <meta
                    property="twitter:description"
                    content="An HTTP request is made by a client, to a named host,
                    which is located on a server. The aim of the request is
                    to access a resource on the server."
                />
                <meta
                    name="twitter:image"
                    content={`${process.env.PUBLIC_URL}/assets/discord-devs.webp`}
                />
                <meta
                    name="keywords"
                    content="Discord Bots, Siddhant Sharma, Discord API, Hyena, Vaxin Alerts, Siddhant, AHiddenDonut"
                />
            </Helmet>
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="flex flex-col text-center w-full mb-12">
                    <h2 className="text-xs text-green-400 tracking-widest font-medium title-font mb-1">
                        Working with APIs
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                        Making Requests in Python
                    </h1>
                    <div className="container mx-auto flex px-5 pt-12 items-center justify-center flex-col">
                        <img
                            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                            alt="hero"
                            src={`${process.env.PUBLIC_URL}/assets/requests.png`}
                        ></img>
                    </div>
                </div>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        What are Requests?
                    </h1>
                    <p className="leading-relaxed mb-8">
                        An HTTP request is made by a client, to a named host,
                        which is located on a server. The aim of the request is
                        to access a resource on the server. To make the request,
                        the client uses components of a URL (Uniform Resource
                        Locator), which includes the information needed to
                        access the resource.
                        <br />
                        <br />
                        In this article, we will go through Synchronous
                        requests.
                    </p>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        Sync reqs with requests module
                    </h1>
                    <p className="leading-relaxed mb-8">
                        The requests module allows you to send synchronous HTTP
                        requests using Python. To download requests, type the
                        following command into the command line - <br />
                        <br />
                    </p>
                    <code className="w-3/6 mx-auto mb-10 border rounded p-5 bg-gray-900 break-words block">
                        $ pip install requests
                    </code>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        Making a request
                    </h1>
                    <p className="leading-relaxed mb-8">
                        Syntax to make a 'GET' request
                    </p>
                    <code className="mb-10 border rounded p-5 bg-gray-900 block break-words">
                        &gt;&gt;&gt; response =
                        requests.get("https://example.com/", params=
                        {"{key: value}"}, args)
                    </code>
                    <p className="leading-relaxed mt-8">
                        Making a simple 'GET' request
                    </p>
                    <div className="container mx-auto flex px-5 mt-6 items-center justify-center flex-col">
                        <img
                            className="lg:w-4/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded-lg"
                            alt="hero"
                            src={`${process.env.PUBLIC_URL}/assets/code-snippets/requests-1.png`}
                        ></img>
                    </div>
                    <p className="leading-relaxed mb-8">
                        JSON response (not the full response cuz big af)
                    </p>
                    <div className="container mx-auto flex px-5 mt-6 items-center justify-center flex-col">
                        <img
                            className="lg:w-4/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded-lg"
                            alt="hero"
                            src={`${process.env.PUBLIC_URL}/assets/code-snippets/requests-2.png`}
                        ></img>
                    </div>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        Response Object
                    </h1>
                    <p className="leading-relaxed mb-8">
                        The requests.Response() Object contains the server's
                        response to the HTTP request. Properties and Methods.
                        This Response object in terms of python is returned by
                        requests.method(), method being – get, post, put, etc.
                        Response is a powerful object with lots of functions and
                        attributes that assist in normalizing data or creating
                        ideal portions of code.
                    </p>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white">
                        Methods & Attributes
                    </h1>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-center">
                                        <thead className="border-b bg-gray-800">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-white px-6 py-4"
                                                >
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-white px-6 py-4"
                                                >
                                                    Method
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-white px-6 py-4"
                                                >
                                                    Description
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    1
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.close()
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Releases the connection back
                                                    to the pool.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    2
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.content
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Content of the response, in
                                                    bytes.
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    3
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.json()
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Returns the json-encoded
                                                    content of a response, if
                                                    any.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    4
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.text
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Content of the response, in
                                                    unicode.
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    5
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.ok
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Returns True if
                                                    :attr:`status_code` is less
                                                    than 400, False if not.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    6
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.links
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Returns the parsed header
                                                    links of the response, if
                                                    any.
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    7
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.headers
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Case-insensitive Dictionary
                                                    of Response Headers.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    8
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.next
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Returns a PreparedRequest
                                                    for the next request in a
                                                    redirect chain, if there is
                                                    one.
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    9
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.status_code
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Integer Code of responded
                                                    HTTP Status, e.g. 404 or
                                                    200.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    10
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.headers
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Case-insensitive Dictionary
                                                    of Response Headers.
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    11
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.url
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Final URL location of
                                                    Response.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    12
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.cookies
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.cookies returns a
                                                    CookieJar object with the
                                                    cookies sent back from the
                                                    server.
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    13
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.url
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Final URL location of
                                                    Response.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    14
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.elapsed
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Time elapsed between sending
                                                    the req and the arrival of
                                                    the resp (as a timedelta).
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    14
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    resp.encoding
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    Encoding to decode with when
                                                    accessing r.text
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 mt-2 text-white">
                        HTTP Request Methods
                    </h1>
                    <p className="leading-relaxed mb-6">
                        The most frequently used HTTP request methods are 'GET'
                        and 'POST', here are the rest,
                    </p>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-center">
                                        <thead className="border-b bg-gray-800">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-white px-6 py-4"
                                                >
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-white px-6 py-4"
                                                >
                                                    Method
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-white px-6 py-4"
                                                >
                                                    Description
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    1
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    <a
                                                        className="text-indigo-600"
                                                        href="https://docs.python-requests.org/en/stable/api/#requests.get"
                                                    >
                                                        'GET'
                                                    </a>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    GET is used to retrieve and
                                                    request data from a
                                                    specified resource in a
                                                    server.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    2
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    <a
                                                        className="text-indigo-600"
                                                        href="https://docs.python-requests.org/en/stable/api/#requests.post"
                                                    >
                                                        'POST'
                                                    </a>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    POST request method requests
                                                    that a web server accept the
                                                    data enclosed in the body of
                                                    the request message, most
                                                    likely for storing it.
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    3
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    <a
                                                        className="text-indigo-600"
                                                        href="https://docs.python-requests.org/en/stable/api/#requests.delete"
                                                    >
                                                        'DELETE'
                                                    </a>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    The HTTP DELETE method is
                                                    used to delete a resource
                                                    from the server.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    4
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    <a
                                                        className="text-indigo-600"
                                                        href="https://docs.python-requests.org/en/stable/api/#requests.put"
                                                    >
                                                        'PUT'
                                                    </a>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    HTTP PUT request method
                                                    creates a new resource or
                                                    replaces a representation of
                                                    the target resource with the
                                                    request payload.
                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    5
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    <a
                                                        className="text-indigo-600"
                                                        href="https://docs.python-requests.org/en/stable/api/#requests.head"
                                                    >
                                                        'HEAD'
                                                    </a>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    The HEAD method asks for a
                                                    response identical to that
                                                    of a GET request, but
                                                    without the response body.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    6
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    <a
                                                        className="text-indigo-600"
                                                        href="https://docs.python-requests.org/en/stable/api/#requests.patch"
                                                    >
                                                        'PATCH'
                                                    </a>
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4">
                                                    The HTTP PATCH request
                                                    method applies partial
                                                    modifications to a resource.
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-300 border-gray-300"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                            onClick={() =>
                                window.open(
                                    "https://docs.python-requests.org/en/latest/",
                                    "_blank"
                                )
                            }
                        >
                            Requests docs
                        </button>
                        <button
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                            onClick={() =>
                                window.open(
                                    "https://pypi.org/project/requests/",
                                    "_blank"
                                )
                            }
                        >
                            Requests PyPi
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Requests
