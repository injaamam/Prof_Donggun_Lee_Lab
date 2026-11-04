import PageHeading from '../components/PageHeading'

export default function NotFound() {
  return (
    <>
      <PageHeading
        title="Page not found"
        label="404 / PAGE NOT FOUND"
        description="The page you’re looking for may have moved. Return to the lab to explore our research, people, and publications."
      />
      <a className="button button-solid" href="/">
        Back to the lab ↗
      </a>
    </>
  )
}
