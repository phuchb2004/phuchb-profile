import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';

export default function Loading() {
    const { t } = useTranslation();

    return (
        <div className="loading-state">
            <div className="loader"></div>
            <p>{t('experience.loading')}</p>
        </div>
    );
}
