import {Icon} from "@iconify/react"
import {Button, Menu, Tooltip} from "@mantine/core"
import React from "react"
import {useTranslation} from "react-i18next"
import {getLanguage} from "../utils/language.ts"

function Header() {
    const {t, i18n} = useTranslation()
    const currentLanguage = getLanguage(i18n.language)

    const handleSelectLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.value) {
            i18n.changeLanguage(e.currentTarget.value)
        }
    }

    return (
        <header className='fixed w-full'>
            <div className="h-16 container px-7 flex items-center justify-between">
                <div>
                    <Icon className='text-pink-600 text-5xl' icon="mingcute:love-fill"/>
                </div>

                <div className='flex gap-3 items-center'>
                    <Menu shadow="md" width={120}>
                        <Menu.Target>
                            <Tooltip label={t('change language')}>
                                <Button leftSection={<Icon fontSize={20} icon="heroicons:language-20-solid"/>} rightSection={<Icon icon="mingcute:down-line" />}>
                                    <span className='pt-0.5'>{currentLanguage}</span>
                                </Button>
                            </Tooltip>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>{t('languages')}</Menu.Label>

                            <Menu.Item value='en' onClick={handleSelectLanguage}
                                       leftSection={<Icon icon="twemoji:flag-us-outlying-islands"/>}>
                                English
                            </Menu.Item>

                            <Menu.Item value='vi' onClick={handleSelectLanguage}
                                       leftSection={<Icon icon="twemoji:flag-vietnam"/>}>
                                Tiếng Việt
                            </Menu.Item>

                            <Menu.Item value='js' onClick={handleSelectLanguage}
                                       leftSection={<Icon icon="twemoji:flag-japan"/>}
                                       disabled
                            >
                                日本語
                            </Menu.Item>

                            <Menu.Item value='zh' onClick={handleSelectLanguage}
                                       leftSection={<Icon icon="twemoji:flag-china"/>}
                                       disabled
                            >
                                中國人
                            </Menu.Item>

                            <Menu.Item value='ko' onClick={handleSelectLanguage}
                                       leftSection={<Icon icon="twemoji:flag-south-korea"/>}
                                       disabled
                            >
                                한국인
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header