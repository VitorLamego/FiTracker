<script>
	import SectionHeader from '$lib/components/home/SectionHeader.svelte';
	import ConfigHeader from './components/ConfigHeader.svelte';
	import ActivityRow from './components/ActivityRow.svelte';
	import ObjectiveRow from './components/ObjectiveRow.svelte';
	import NotificationConfig from './components/NotificationConfig.svelte';
</script>

<div class="box-content">
	<ConfigHeader />
	<div class="page-content">
		<SectionHeader title="Atividade" />
		<ActivityRow />
		<SectionHeader title="Objetivos" />
		<ObjectiveRow />
		<SectionHeader title="Notificações" />
		<NotificationConfig />
	</div>
</div>
