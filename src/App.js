import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, Globe } from "lucide-react";
import "./styles.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("Generated Articles");
  const [search, setSearch] = useState("");

  const data = {
    "Generated Articles": [
      {
        title: "How to Improve Your Skills in League of Legends",
        keyword: "league of legends [2240000]",
        words: 4575,
        created: "20 hours ago",
      },
      {
        title: "Top Virtual Executive Assistant Services (2024)",
        keyword: "virtual executive assistant [2900]",
        words: 2408,
        created: "1 Oct, 24",
      },
    ],
    "Published Articles": [
      {
        title: "The Rise of Remote Work Culture",
        keyword: "remote work culture [120000]",
        words: 1984,
        created: "2 days ago",
      },
    ],
    "Scheduled Articles": [
      {
        title: "Best Tools for Graphic Designers in 2025",
        keyword: "graphic design tools [1500]",
        words: 2100,
        created: "Scheduled for 25 May, 25",
      },
    ],
    "Archived Articles": [
      {
        title: "Marketing Trends You Missed Last Year",
        keyword: "marketing trends [8900]",
        words: 1300,
        created: "Archived on 1 Jan, 24",
      },
    ],
  };

  const tabs = Object.keys(data);
  const articles = data[activeTab];

  // Handlers for buttons
  const handleView = (article) => {
    alert(`Viewing: ${article.title}`);
  };

  const handlePublish = (article) => {
    alert(`Publishing: ${article.title}`);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="brand">abun</h1>
        <select className="domain-select">
          <option>amazon.com</option>
          <option>flipkart.com</option>
        </select>
        <nav className="sidebar-nav">
          <h3 className="nav-heading">Articles</h3>
          <ul className="nav-list">
            <li className="active-tab">Generated Articles</li>
            <li>Create Article</li>
            <li>Keyword Projects</li>
            <li>AI Keyword to Article</li>
            <li>Article Settings</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="page-title">Articles</h2>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search for Title & Keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="table-container"
        >
          <table className="articles-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Article Title</th>
                <th>Keyword [Traffic]</th>
                <th>Words</th>
                <th>Created On</th>
                <th>Action</th>
                <th>Publish</th>
              </tr>
            </thead>
            <tbody>
              {articles
                .filter((article) =>
                  article.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((article, idx) => (
                  <motion.tr
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    className="article-row"
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="title-cell">{article.title}</td>
                    <td>{article.keyword}</td>
                    <td>{article.words}</td>
                    <td>{article.created}</td>
                    <td>
                      <button
                        className="view-button"
                        onClick={() => handleView(article)}
                      >
                        <Eye className="icon" /> View
                      </button>
                    </td>
                    <td>
                      <button
                        className="publish-button"
                        onClick={() => handlePublish(article)}
                      >
                        <Globe className="icon" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </motion.div>

        {/* Footer */}
        <div className="footer-bar">
          <div>Total {articles.length} Article Titles</div>
          <div>
            Show{" "}
            <select className="page-select">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>{" "}
            entries per page
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
