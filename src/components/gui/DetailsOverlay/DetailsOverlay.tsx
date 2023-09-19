import './style.css';
import "flag-icons/css/flag-icons.min.css";
import { useContext, useEffect, useState } from "react";
import { Box, Icon, IconButton, Spacer, Stat, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { BiExpandAlt, BiWindowClose } from "react-icons/bi";
import VulnTable from "../parts/VulnTable/VulnTable";
import BannersTable from "../parts/BannersTable/BannersTable";
import ReportsTable from "../parts/ReportsTable/ReportsTable";
import Country from '../parts/Country/Country';
import LastSeen from '../parts/LastSeen/LastSeen';
import CountBadge from '../parts/CountBadge/CountBadge';
import { SharedStateContext } from '../../../contexts/SharedStateContext';

interface State {
    expanded: boolean,
    open: boolean,
}

export default function DetailsOverlay() {
    const { sharedState, setSharedState } = useContext(SharedStateContext);

    const [state, setState] = useState<State>({
        expanded: false,
        open: false
    })

    const toggleExpanded = () => {
        if (state.expanded) {
            setState({
                expanded: false,
                open: true
            })
        } else {
            setState({
                expanded: true,
                open: true
            })
        }
    }

    const toggleReportMode = () => {
        if (sharedState?.selectedAccess) {
            setSharedState({ mode: 'reports', selectedAccess: sharedState?.selectedAccess })
            setState({
                expanded: false,
                open: true
            })
        }
    }

    const close = () => {
        setSharedState({
            mode: 'accesses'
        });
    }

    useEffect(() => {
        if (sharedState?.selectedAccess) {
            setState({
                expanded: state.expanded,
                open: true
            })
        } else {
            setState({
                expanded: false,
                open: false
            })
        }
    }, [sharedState, setState])

    return (
        <>
            <Box className={"side-bar " + (state.expanded ? 'expanded' : 'collapsed')}>
                {state.open && sharedState?.selectedAccess != null &&
                    <Box width='100%' borderWidth='1px' borderRadius='lg' bg='Background' p={6} display='flex' flexDir='column'>
                        <Box display='flex' alignItems='baseline'>
                            <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                                <Box as='span' pr={3}>IP: {sharedState?.selectedAccess?.ip}</Box>
                                {state.expanded &&
                                    <>
                                        <Country display='inline' mr={2} abuseIPDB={sharedState?.selectedAccess.abuseIPDBData} />
                                        <LastSeen display='inline' mr={2} lastSeen={sharedState?.selectedAccess.lastSeen} />
                                    </>
                                }
                                <CountBadge count={sharedState?.selectedAccess.shodanData.totalVulnerabilities} label='Vulns' color='red' />
                                <CountBadge count={sharedState?.selectedAccess.shodanData.totalBanners} label='Banners' color='green' />
                                <CountBadge count={sharedState?.selectedAccess.abuseIPDBData.totalReports} label='Reports' color='yellow' />
                            </Box>

                            <Spacer />
                            <IconButton icon={<Icon as={BiExpandAlt} />} size='sm' onClick={toggleReportMode} aria-label={''} mr={2} />
                            <IconButton icon={<Icon as={BiExpandAlt} />} size='sm' onClick={toggleExpanded} aria-label={''} mr={2} />
                            <IconButton icon={<Icon as={BiWindowClose} />} size='sm' onClick={close} aria-label={''} />
                        </Box>
                        {!state.expanded &&
                            <>
                                <Country abuseIPDB={sharedState?.selectedAccess.abuseIPDBData} />
                                <LastSeen lastSeen={sharedState?.selectedAccess.lastSeen} />
                            </>
                        }
                        {state.expanded &&
                            <Tabs isLazy variant='soft-rounded' colorScheme='green' mt={1} flexGrow='1' display='flex' overflow='hidden' flexDir='column'>
                                <TabList paddingBottom={2}>
                                    {sharedState?.selectedAccess.shodanData.totalVulnerabilities > 0 &&
                                        <Tab>Vulnerabilities</Tab>}
                                    {sharedState?.selectedAccess.shodanData.totalBanners > 0 &&
                                        <Tab>Banners</Tab>}
                                    {sharedState?.selectedAccess.abuseIPDBData.totalReports > 0 &&
                                        <Tab>Reports</Tab>}
                                </TabList>
                                <TabPanels overflow='overlay' display='flex'>
                                    {sharedState?.selectedAccess.shodanData.totalVulnerabilities > 0 &&
                                        <TabPanel width='100%' ><VulnTable access={sharedState?.selectedAccess} /></TabPanel>}
                                    {sharedState?.selectedAccess.shodanData.totalBanners > 0 &&
                                        <TabPanel width='100%' ><BannersTable access={sharedState?.selectedAccess} /></TabPanel>}
                                    {sharedState?.selectedAccess.abuseIPDBData.totalReports > 0 &&
                                        <TabPanel width='100%' ><ReportsTable access={sharedState?.selectedAccess} /></TabPanel>}
                                </TabPanels>
                            </Tabs>
                        }
                    </Box>}
            </Box>
        </>
    )
}