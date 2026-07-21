import "./DashboardCards.css";

import leaveIcon from "../assets/Group.png";
import assessmentIcon from "../assets/Vector.png";
import certificateIcon from "../assets/Vector (1).png";
import transferIcon from "../assets/Vector (2).png";

function DashboardCards() {
  return (
    <div className="dashboardCardsContainer">

      {/* Recent Activities */}

      <div className="dashboardRecentCard">

        <div className="dashboardCardHeader">
          <h2>Recent Activities</h2>
          <span>View All</span>
        </div>

        <div className="dashboardActivityList">

          <div className="dashboardActivityRow">
            <span className="dashboardDot"></span>
            <p className="dashboardActivityText">
              New batch "D-12" has been created.
            </p>
            <span className="dashboardActivityDate">
              July 20 · 9:30 AM
            </span>
          </div>

          <div className="dashboardActivityRow">
            <span className="dashboardDot"></span>
            <p className="dashboardActivityText">
              Assessment "Java test published."
            </p>
            <span className="dashboardActivityDate">
              July 15 · 10:30 AM
            </span>
          </div>

          <div className="dashboardActivityRow">
            <span className="dashboardDot"></span>
            <p className="dashboardActivityText">
              Session completed for "UI/UX laws".
            </p>
            <span className="dashboardActivityDate">
              July 6 · 4:30 AM
            </span>
          </div>

          <div className="dashboardActivityRow">
            <span className="dashboardDot"></span>
            <p className="dashboardActivityText">
              Certificate issued to 12 students.
            </p>
            <span className="dashboardActivityDate">
              July 10 · 3:30 AM
            </span>
          </div>

          <div className="dashboardActivityRow">
            <span className="dashboardDot"></span>
            <p className="dashboardActivityText">
              New batch "UI-08" has been created.
            </p>
            <span className="dashboardActivityDate">
              July 11 · 9:30 AM
            </span>
          </div>

        </div>

      </div>

      {/* Pending Approvals */}

      <div className="dashboardApprovalCard">

        <div className="dashboardCardHeader">
          <h2>Pending Approvals</h2>
          <span>View All</span>
        </div>

        <div className="dashboardApprovalList">

          <div className="dashboardApprovalRow">
            <div className="dashboardApprovalLeft">
              <img
                src={leaveIcon}
                alt="Leave"
                className="dashboardApprovalIcon"
              />
              <p className="dashboardApprovalTitle">
                Leave Request
              </p>
            </div>

            <button className="dashboardApprovalButton">
              8 Requests
            </button>
          </div>

          <div className="dashboardApprovalRow">
            <div className="dashboardApprovalLeft">
              <img
                src={assessmentIcon}
                alt="Assessment"
                className="dashboardApprovalIcon"
              />
              <p className="dashboardApprovalTitle">
                Assessment Evaluation
              </p>
            </div>

            <button className="dashboardApprovalButton">
              15 Pending
            </button>
          </div>

          <div className="dashboardApprovalRow">
            <div className="dashboardApprovalLeft">
              <img
                src={certificateIcon}
                alt="Certificate"
                className="dashboardApprovalIcon"
              />
              <p className="dashboardApprovalTitle">
                Certificate Requests
              </p>
            </div>

            <button className="dashboardApprovalButton">
              6 Requests
            </button>
          </div>

          <div className="dashboardApprovalRow">
            <div className="dashboardApprovalLeft">
              <img
                src={transferIcon}
                alt="Transfer"
                className="dashboardApprovalIcon"
              />
              <p className="dashboardApprovalTitle">
                Course Transfer
              </p>
            </div>

            <button className="dashboardApprovalButton">
              3 Requests
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardCards;