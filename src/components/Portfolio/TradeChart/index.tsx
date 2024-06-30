"use client";

import { MutableRefObject, useEffect, useRef, useState, memo } from "react";
import {
  ChartingLibraryWidgetOptions,
  LanguageCode,
  ResolutionString,
  widget
} from "../../../../public/static/charting_library";
import Datafeed from "@lib/datafeed";
import { useTradeStore } from "@store/tradeStore";

const TradeChart = (props: Partial<ChartingLibraryWidgetOptions>) => {
  const [isChartReady, setIsChartReady] = useState(false);
  const { selectedPool } = useTradeStore();

  const chartContainerRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    // console.log("selected pool", selectedPool);

    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: `Kraken:${selectedPool.symbol}` ?? "Kraken:USDC/USDT",
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: Datafeed,
      timezone: props.timezone,
      interval: props.interval as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale as LanguageCode,
      disabled_features: ["use_localstorage_for_settings"],
      enabled_features: ["study_templates"],
      charts_storage_url: props.charts_storage_url,
      charts_storage_api_version: props.charts_storage_api_version,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize,
      theme: props.theme,
      debug: false,
      symbol_search_request_delay: props.symbol_search_request_delay,
      auto_save_delay: props.auto_save_delay,
      toolbar_bg: props.toolbar_bg,
      time_frames: props.time_frames
    };

    const tvWidget = new widget(widgetOptions);

    tvWidget.onChartReady(() => {
      setIsChartReady(true);
      tvWidget.headerReady().then(() => {});
    });

    return () => {
      tvWidget.remove();
    };
  }, [props, selectedPool]);

  return (
    <div
      ref={chartContainerRef}
      className="flex flex-col items-center h-full max-h-max justify-center"
    />
  );
};

export default memo(TradeChart);
