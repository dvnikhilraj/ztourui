import { EnquiryFormComponent } from '../components/enquiry/enquiryFormComponent';

export default function Enquiry() {
  return (
    <>
      <section id="content" className="gray-area" style={{ minHeight: '353px' }}>
        <div id="main" className="static-content">
          <div className="container" id="EnquiryForm">
            <EnquiryFormComponent />
          </div>
        </div>
      </section>
    </>
  );
}