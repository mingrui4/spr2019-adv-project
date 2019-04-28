import matplotlib.pyplot as plt
import pandas as pd

'''
Based on data from fivethirtyeight

'''

weather_data = pd.read_csv('KNYC.csv', parse_dates=['date'])

with plt.style.context('style.mplstyle'):

    weather_data['day_order'] = range(len(weather_data))
    # print(weather_data)
    day_order = weather_data['day_order']
    record_max_temps = weather_data['record_max_temp'].values
    record_min_temps = weather_data['record_min_temp'].values
    average_max_temps = weather_data['average_max_temp'].values
    average_min_temps = weather_data['average_min_temp'].values
    actual_max_temps = weather_data['actual_max_temp'].values
    actual_min_temps = weather_data['actual_min_temp'].values

    fig, ax1 = plt.subplots(figsize=(15, 7))

    # Create the bars showing all-time record highs and lows
    plt.bar(day_order, record_max_temps - record_min_temps, bottom=record_min_temps,
            edgecolor='none', color='#abd3fd', width=1)

    # Create the bars showing average highs and lows
    plt.bar(day_order, average_max_temps - average_min_temps, bottom=average_min_temps,
            edgecolor='none', color='#60acfc', width=1)

    # Create the bars showing this year's highs and lows
    plt.bar(day_order, actual_max_temps - actual_min_temps, bottom=actual_min_temps,
            edgecolor='black', linewidth=0.5, color='#6260fc', width=1)

    new_max_records = weather_data[weather_data.record_max_temp <= weather_data.actual_max_temp]
    new_min_records = weather_data[weather_data.record_min_temp >= weather_data.actual_min_temp]
    print(new_max_records['day_order'].values, new_max_records['actual_max_temp'].values)
    print(new_min_records['day_order'].values, new_min_records['actual_min_temp'].values)
    # Create the dots marking record highs and lows for the year
    plt.scatter(new_max_records['day_order'].values + 0.5,
                new_max_records['actual_max_temp'].values + 1.25,
                s=15, zorder=10, color='#d62728', alpha=0.75, linewidth=0)

    plt.scatter(new_min_records['day_order'].values + 0.5,
                new_min_records['actual_min_temp'].values - 1.25,
                s=15, zorder=10, color='#1f77b4', alpha=0.75, linewidth=0)

    # Setting range of x,y axis
    plt.ylim(-15, 111)
    plt.xlim(-5, 370)

    # Setting graduation of x,y axis
    plt.yticks(range(-10, 111, 10), [r'{}$^\circ$'.format(x)
                                     for x in range(-10, 111, 10)], fontsize=10)
    plt.ylabel(r'Temperature ($^\circ$F)', fontsize=12)

    month_beginning_df = weather_data[weather_data['date'].apply(lambda x: True if x.day == 1 else False)]
    month_beginning_indeces = list(month_beginning_df['day_order'].values)
    month_beginning_names = list(month_beginning_df['date'].apply(lambda x: x.strftime("%B")).values)

    # Add the last month label manually
    month_beginning_indeces += [weather_data['day_order'].values[-1]]
    month_beginning_names += ['July']

    plt.xticks(month_beginning_indeces,
               month_beginning_names,
               fontsize=10)

    ax2 = ax1.twiny()
    plt.xticks(month_beginning_indeces, [None])
    plt.xlim(-5, 370)

    ax3 = ax1.twinx()
    plt.yticks(range(-10, 111, 10),[None])
    plt.ylim(-15, 111)
    plt.grid(False)

    plt.title('New York, NYC\'s weather, July 2014 - June 2015\n\n', fontsize=20)

    plt.savefig('newyork-weather.png')
