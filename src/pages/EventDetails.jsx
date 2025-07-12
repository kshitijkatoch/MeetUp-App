import Header from "../components/Header";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

export default function EventDetails() {
  const { data, loading, error } = useFetch(
    "https://meetup-app-backend-coral.vercel.app/events"
  );

  const eventId = useParams().id;
  const event = data?.find((e) => e._id === eventId);

  const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <>
      <Header />
      {loading && <p className="container py-3">Loading...</p>}
      {event && (
        <main className="container py-3">
          <div className="row g-4">
            {/* Left Column */}
            <div className="col-md-8">
              <h2 className="fw-bold">{event.title}</h2>
              <p className="mb-2">
                <strong>Hosted By:</strong> {event.title.split(" ")[0]} Experts
              </p>
              <img
                src={event.thumbnail}
                alt={event.title}
                className="img-fluid rounded mb-4"
              />

              <h5 className="fw-bold">Details:</h5>
              <p>{event.description}</p>

              <h5 className="fw-bold mt-4">Additional Information:</h5>
              <p>
                <strong>Dress Code:</strong> {event.additionalInfo.dressCode}
              </p>
              <p>
                <strong>Age Restrictions:</strong>{" "}
                {event.additionalInfo.ageRestrictions}
              </p>

              <h5 className="fw-bold mt-4">Event Tags:</h5>
              <div className="d-flex gap-2 flex-wrap">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge bg-success px-3 py-2 opacity-75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-4">
              <div className="border rounded p-4 mb-4 bg-white">
                <p className="mb-2 bg-white">
                  <i className="bi bi-calendar-event bg-white me-2"></i>
                  {formatDate(event.date)}
                </p>
                <p className="mb-2 bg-white">
                  <i className="bi bi-clock bg-white me-2"></i>
                  {event.sessionTimings}
                </p>
                <p className="mb-2 bg-white">
                  <i className="bi bi-geo-alt bg-white me-2"></i>
                  {event.venue.name}
                  {event.venue.Address && (
                    <>
                      <br />
                      {event.venue.Address}
                    </>
                  )}
                </p>
                <p className="mb-2 bg-white">
                  <i className="bi bi-currency-rupee bg-white me-2"></i>
                  {event.pricing === 0
                    ? "Free"
                    : event.pricing.toLocaleString()}
                </p>
              </div>

              <h5 className="fw-bold mb-3">Speaker:</h5>
              <div className="card p-3 border-0 shadow-sm text-center bg-white">
                <i class="bi bi-person-circle text-secondary fs-1 bg-white"></i>
                <p className="fw-semibold m-0 bg-white">
                  {event.speakers.name}
                </p>
                <small className="text-muted bg-white">
                  {event.speakers.designation}
                </small>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
