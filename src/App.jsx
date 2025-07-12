import Header from "./components/Header";
import useFetch from "./useFetch";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [eventType, setEvent] = useState("Both");
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetch(
    "https://meetup-app-backend-coral.vercel.app/events"
  );

  // const filteredEvents = eventType === "Both" ? data : data.filter((e) => e.type === eventType);

  const filteredEvents = data
    ?.filter((e) => eventType === "Both" || e.type === eventType)
    .filter((e) => {
      const titleMatch = e.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const tagsMatch = e.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return titleMatch || tagsMatch;
    });

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="container py-2 text-dark">
        <section className="d-flex justify-content-between align-items-center">
          <h1 className="fw-bold">Meetup Events</h1>
          <div>
            <select
              className="form-control"
              onChange={(e) => setEvent(e.target.value)}
            >
              <option value="Both">Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </section>

        <section className="py-3 px-4">
          {loading && <p>Loading...</p>}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filteredEvents?.map((event) => (
              <div className="col" key={event._id}>
                <Link
                  to={`/events/${event._id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card border-0">
                    <img
                      src={event.thumbnail}
                      className="card-img"
                      alt="Event Image"
                    />
                    <div className="card-img-overlay p-2 d-flex justify-content-start align-items-start bg-transparent">
                      <span className="badge text-bg-light fw-medium p-2">
                        {event.type}
                      </span>
                    </div>

                    <div className="card-body p-0">
                      <p className="card-text m-0">
                        <small className="text-body-secondary">
                          {formatDate(event.date)}, {event.sessionTimings}
                        </small>
                      </p>
                      <h5 className="card-title fw-bold">{event.title}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
