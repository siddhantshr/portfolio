import React from "react"
import BlogLayout from "../BlogLayout"

const responseRows = [
    ["resp.close()", "Releases the connection back to the pool."],
    ["resp.content", "Returns response content in bytes."],
    ["resp.json()", "Parses JSON from the response body when available."],
    ["resp.text", "Returns response content as decoded text."],
    ["resp.ok", "True when the status code is below 400."],
    ["resp.links", "Parsed link headers from the response."],
    ["resp.headers", "Case-insensitive dictionary of response headers."],
    ["resp.next", "PreparedRequest for the next redirect, if any."],
    ["resp.status_code", "Numeric HTTP status such as 200 or 404."],
    ["resp.url", "Final URL location of the response."],
    ["resp.cookies", "CookieJar containing cookies sent by the server."],
    ["resp.elapsed", "Elapsed time between sending the request and receiving the response."],
    ["resp.encoding", "Encoding used when decoding `resp.text`."],
]

const requestMethods = [
    [
        "GET",
        "https://docs.python-requests.org/en/stable/api/#requests.get",
        "Retrieves data from a resource.",
    ],
    [
        "POST",
        "https://docs.python-requests.org/en/stable/api/#requests.post",
        "Sends data to a server, commonly for creation or submission.",
    ],
    [
        "DELETE",
        "https://docs.python-requests.org/en/stable/api/#requests.delete",
        "Deletes a resource on the server.",
    ],
    [
        "PUT",
        "https://docs.python-requests.org/en/stable/api/#requests.put",
        "Creates or fully replaces a resource with the request payload.",
    ],
    [
        "HEAD",
        "https://docs.python-requests.org/en/stable/api/#requests.head",
        "Returns headers like GET, but without the response body.",
    ],
    [
        "PATCH",
        "https://docs.python-requests.org/en/stable/api/#requests.patch",
        "Applies a partial update to a resource.",
    ],
]

const Requests = () => {
    return (
        <BlogLayout
            eyebrow="Working with APIs"
            title="Making Requests in Python"
            summary="The core ideas behind synchronous HTTP requests with Python's `requests` library."
            meta="Focused on fundamentals: URLs, methods, responses, and practical inspection."
            accent="amber"
        >
            <section className="blog-section">
                <img
                    className="blog-hero-image blog-hero-image-small"
                    alt="Python requests"
                    src={`${process.env.PUBLIC_URL}/assets/requests.png`}
                />
                <p className="blog-lead">
                    An HTTP request is made by a client, to a named host, which
                    is located on a server. The aim of the request is to access
                    a resource on the server. To make the request, the client
                    uses components of a URL, which includes the information
                    needed to access the resource.
                </p>
                <p>
                    In this article, we will go through Synchronous requests.
                </p>
            </section>

            <section className="blog-section">
                <h2>What are Requests?</h2>
                <p>
                    The requests module allows you to send synchronous HTTP
                    requests using Python. To download requests, type the
                    following command into the command line:
                </p>
                <div className="code-block">$ pip install requests</div>
            </section>

            <section className="blog-section">
                <h2>Making a request</h2>
                <p>Syntax to make a GET request:</p>
                <div className="code-block">
                    {`response = requests.get("https://example.com/", params={"key": "value"})`}
                </div>
                <p>
                    Making a simple GET request:
                </p>
                <img
                    className="blog-wide-image"
                    alt="Requests code snippet"
                    src={`${process.env.PUBLIC_URL}/assets/code-snippets/requests-1.png`}
                />
                <img
                    className="blog-wide-image"
                    alt="Requests JSON response snippet"
                    src={`${process.env.PUBLIC_URL}/assets/code-snippets/requests-2.png`}
                />
                <p>JSON response (not the full response cuz big af)</p>
            </section>

            <section className="blog-section">
                <h2>Response object</h2>
                <p>
                    The requests.Response() object contains the server&apos;s
                    response to the HTTP request. This Response object in terms
                    of Python is returned by requests.method(), method being
                    get, post, put, etc. Response is a powerful object with
                    lots of functions and attributes that assist in normalizing
                    data or creating ideal portions of code.
                </p>
                <div className="blog-table-wrap">
                    <table className="blog-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Method / Attr</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {responseRows.map((row, index) => (
                                <tr key={row[0]}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <code>{row[0]}</code>
                                    </td>
                                    <td>{row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="blog-section">
                <h2>HTTP request methods</h2>
                <p>
                    The most frequently used HTTP request methods are GET and
                    POST, here are the rest.
                </p>
                <div className="blog-table-wrap">
                    <table className="blog-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Method</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestMethods.map((row, index) => (
                                <tr key={row[0]}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <a href={row[1]} target="_blank" rel="noreferrer">
                                            {row[0]}
                                        </a>
                                    </td>
                                    <td>{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="blog-section">
                <h2>Read further</h2>
                <p>
                    Official documentation is the best next step once the basic
                    request and response flow makes sense.
                </p>
                <div className="blog-actions">
                    <a
                        className="btn-primary"
                        href="https://docs.python-requests.org/en/latest/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Requests Docs
                    </a>
                    <a
                        className="btn-ghost"
                        href="https://pypi.org/project/requests/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Requests on PyPI
                    </a>
                </div>
            </section>
        </BlogLayout>
    )
}

export default Requests
