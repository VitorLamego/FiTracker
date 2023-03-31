import { CronJob } from "cron";

import { toast } from '$lib/toastNotifications';

import { isWaterNotification, waterIndications, startHour, finishHour } from "./store";


class AppJobs {
    waterRecomendation: number | undefined;
    _startHour: string | undefined;
    _finishHour: string | undefined;

    constructor() {
        this.cronJobs();
        waterIndications.subscribe((value) => this.waterRecomendation = value)
        startHour.subscribe((value) => this._startHour = value)
        finishHour.subscribe((value) => this._finishHour = value)
    }

    checkHourToNotificate() {
        var now = new Date;
        var actualHour = now.getHours();
        var actualMinutes = now.getMinutes();

        var startString = this._startHour;
        var finishString = this._finishHour;

        if (startString != undefined && finishString != undefined) {
            var startHour = parseInt(startString.split(":")[0]);
            var startMinutes = parseInt(startString.split(":")[1]);

            var finishHour = parseInt(finishString.split(":")[0]);
            var finishMinutes = parseInt(finishString.split(":")[1]);

            if (startHour < actualHour) {
                if (finishHour > actualHour) return true;
                if (finishHour == actualHour && finishMinutes > actualMinutes) return true;
            } else if (startHour == actualHour) {
                if (startMinutes > actualMinutes && finishHour > actualHour) return true;
                if (startMinutes > actualMinutes && finishHour == actualHour && finishMinutes > actualMinutes) return true;
            }

            return false;
        }
        return true;
    }

    cronJobs() {

        let waterJob = new CronJob('*/15 * * * *', () => {
            console.log()
            isWaterNotification.set(true);
            if (this.checkHourToNotificate()) toast("Não esqueça de tomar " + this.waterRecomendation + " Litros de água agora!");
        }, null, true, 'America/Los_Angeles');

        let breakJob = new CronJob('*/29 * * * *', () => {
            isWaterNotification.set(false);
            if (this.checkHourToNotificate()) toast("Não esqueça de realizar uma pausa!");
        }, null, true, 'America/Los_Angeles');

        waterJob.start();
        breakJob.start();
    }
}

export default AppJobs;