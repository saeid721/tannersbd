
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoadingSpinner from '../components/common/LoadingSpinner';

// ── Lazy-loaded page components (core) ──────────────────────────────
const HomePage              = lazy(() => import('../pages/HomePage'));
const FacilitiesPage        = lazy(() => import('../pages/FacilitiesPage'));
const GalleryPage           = lazy(() => import('../pages/GalleryPage'));
const VideoGalleryPage      = lazy(() => import('../pages/VideoGalleryPage'));
const NotFoundPage          = lazy(() => import('../pages/NotFoundPage'));
const NewsPage              = lazy(() => import('../pages/NewsPage'));
const NewsDetailsPage       = lazy(() => import('../pages/NewsDetailsPage'));
const CircularPage          = lazy(() => import('../pages/CircularPage'));
const CircularDetailsPage   = lazy(() => import('../pages/CircularDetailsPage'));
const PressReleasePage          = lazy(() => import('../pages/PressReleasePage'));
const PressReleaseDetailsPage   = lazy(() => import('../pages/PressReleaseDetailsPage'));
const FaqPage               = lazy(() => import('../pages/FaqPage'));
const ContactPage           = lazy(() => import('../pages/ContactPage'));

// ── About dropdown routes ──────────────────────────────────────────
const ProfilePage           = lazy(() => import('../pages/about/ProfilePage'));
const MissionVisionPage   = lazy(() => import('../pages/about/MissionVisionPage'));
const ChairmanSpeechPage   = lazy(() => import('../pages/about/ChairmanSpeechPage'));
const OrganogramPage            = lazy(() => import('../pages/about/OrganogramPage'));

// ── Membership routes (Members dropdown) ────────────────────────
const ExecutiveCommitteePage        = lazy(() => import('../pages/members/ExecutiveCommitteePage'));
const AdviserCommitteePage        = lazy(() => import('../pages/members/AdviserCommitteePage'));

const GeneralMemberListPage        = lazy(() => import('../pages/members/GeneralMemberListPage'));
const AssociateMemberListPage        = lazy(() => import('../pages/members/AssociateMemberListPage'));
const EligibilityPage        = lazy(() => import('../pages/members/EligibilityPage'));
const MembershipBenefitsPage        = lazy(() => import('../pages/members/MembershipBenefitsPage'));
const AreaOfBtaPage        = lazy(() => import('../pages/members/AreaOfBtaPage'));


// ── Page fallback ────────────────────────────────────────────
const PageFallback = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <LoadingSpinner size="lg" label="Loading page…" />
  </div>
);

// ── Wrap lazy pages with Suspense ────────────────────────────
const withSuspense = (Component) => (
  <Suspense fallback={<PageFallback />}>
    <Component />
  </Suspense>
);

// ── Route definitions ────────────────────────────────────────
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(HomePage) },

      // About routes (dropdown handled in navbar; define routes explicitly)
      { path: 'profile', element: withSuspense(ProfilePage) },
      { path: 'missionVision', element: withSuspense(MissionVisionPage) },
      { path: 'chairmanSpeech', element: withSuspense(ChairmanSpeechPage) },
      { path: 'organogram', element: withSuspense(OrganogramPage) },

      // EC Members routes (including Executive Committee)
      { path: 'executiveCommittee', element: withSuspense(ExecutiveCommitteePage) },
      { path: 'adviserCommittee', element: withSuspense(AdviserCommitteePage) },

      { path: 'generalMemberList', element: withSuspense(GeneralMemberListPage) },
      { path: 'associateMemberList', element: withSuspense(AssociateMemberListPage) },
      { path: 'eligibility', element: withSuspense(EligibilityPage) },
      { path: 'membershipBenefits', element: withSuspense(MembershipBenefitsPage) },
      { path: 'areaOfBta', element: withSuspense(AreaOfBtaPage) },

      // Core feature pages
      { path: 'facilities', element: withSuspense(FacilitiesPage) },
      { path: 'gallery', element: withSuspense(GalleryPage) },
      { path: 'video', element: withSuspense(VideoGalleryPage) },
      { path: 'news', element: withSuspense(NewsPage) },
      { path: 'news/:id', element: withSuspense(NewsDetailsPage) },
      { path: 'circular', element: withSuspense(CircularPage) },
      { path: 'circular/:id', element: withSuspense(CircularDetailsPage) },
      { path: 'pressRelease', element: withSuspense(PressReleasePage) },
      { path: 'pressRelease/:id', element: withSuspense(PressReleaseDetailsPage) },
      { path: 'faq', element: withSuspense(FaqPage) },
      { path: 'contact', element: withSuspense(ContactPage) },

      // 404
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;