import graphicUrl from '../../../../assets/images/8-hero-image.png';
import { Heading } from '../../components';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Dashicon
} from '@wordpress/components';
import { Icon, settings, store } from '@wordpress/icons';

const SettingsSection = () => {
	return (
		<section className="wppw-section wppw-section-home-settings">
			<img src={graphicUrl} className='section-graphic' alt={__('Settings illustration', 'wp-plugin-web')} />
			<Card size="large" className="wppw-section-card">
				<CardHeader>
					<Heading level="3">
						{__(
							'Settings and Performance',
							'wp-plugin-web'
						)}
					</Heading>
				</CardHeader>
				<CardBody>
					{__(
						'Manage your site within this dashboard',
						'wp-plugin-web'
					)}
				</CardBody>
				<CardFooter>
					<div className="wppw-cardlist-content">
						<Heading level="4">
							<Icon icon={settings} />{' '}
							{__(
								'Manage Settings',
								'wp-plugin-web'
							)}
						</Heading>
						<p>
							{__(
								'Manage your site settings. You can ajdust automatic updates, comments, revisions and more.',
								'wp-plugin-web'
							)}
						</p>
					</div>
					<Button 
						variant="primary"
						href="#/settings"
						icon={settings}
						className="callout-link-settings"
					>
						{__('Settings', 'wp-plugin-web')}
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppw-cardlist-content">
						<Heading level="4">
							<Dashicon icon='performance' />{' '}
							{__('Performance', 'wp-plugin-web')}
						</Heading>
						<p>
							{__(
								'Manage site performance and caching settings as well as clear the site cache.',
								'wp-plugin-web'
							)}
						</p>
					</div>
					<Button
						variant="primary"
						href="#/performance"
						icon={<Dashicon icon='performance' />}
						className="callout-link-performance"
					>
						{__('Performance', 'wp-plugin-web')}
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppw-cardlist-content">
						<Heading level="4">
							<Icon icon={store} />{' '}
							{__('Marketplace', 'wp-plugin-web')}
						</Heading>
						<p>
							{__(
								'Add site services, themes or plugins from the marketplace.',
								'wp-plugin-web'
							)}
						</p>
					</div>
					<Button 
						variant="primary"
						href="#/marketplace"
						icon={store}
						className="callout-link-marketplace"
					>
						{__('Visit Marketplace', 'wp-plugin-web')}
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
};

export default SettingsSection;
