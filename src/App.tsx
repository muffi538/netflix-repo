import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/shared/PageTransition";
import LoadingScreen from "@/components/shared/LoadingScreen";
import HomePage from "@/pages/HomePage";

const BirthdayPage = lazy(() => import("@/pages/BirthdayPage"));
const SideQuestPage = lazy(() => import("@/pages/SideQuestPage"));
const RandomBSPage = lazy(() => import("@/pages/RandomBSPage"));
const MissYouPage = lazy(() => import("@/pages/MissYouPage"));

export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/birthday"
            element={
              <PageTransition>
                <BirthdayPage />
              </PageTransition>
            }
          />
          <Route
            path="/sidequest"
            element={
              <PageTransition>
                <SideQuestPage />
              </PageTransition>
            }
          />
          <Route
            path="/random-bs"
            element={
              <PageTransition>
                <RandomBSPage />
              </PageTransition>
            }
          />
          <Route
            path="/miss-you"
            element={
              <PageTransition>
                <MissYouPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
