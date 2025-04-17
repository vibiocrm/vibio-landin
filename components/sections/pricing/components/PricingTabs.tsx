"use client";

import styles from "./PricingTabs.module.css";

interface PricingTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: { id: string; label: string }[];
}

export const PricingTabs = ({ activeTab, setActiveTab, tabs }: PricingTabsProps) => {

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.glowBackground}></div>
      <div className={styles.tabsInner}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.tabActive : styles.tabInactive
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && <span className={styles.activeGlow}></span>}
          </button>
        ))}
      </div>
    </div>
  );
};