'use strict';

/**
 * Migration: 20240425224713_jjcfrjyyjbykhyl
 * Description: Add index
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bbgumfgopt', function(table) {
    table.string('vlzsogrxrj');
    table.float('dzbtnrlicz');
    table.timestamp('waazjlosea');
    table.json('rukrwbdenm');
    table.text('moixwnxcqc');
    table.float('wsmndndieb');
    table.timestamp('kkvkocxcsh');
    table.text('olsgsmjgvm');
    table.json('crdikqxpit');
    table.float('xxjxqwhxwy');
  });
  await knex.schema.alterTable('kgzempcoie', function(table) {
    table.boolean('icfozxwjmy');
    table.json('xrwvysdxgu');
    table.float('esdyuwfxtj');
    table.json('ncjvzsssyg');
    table.json('rcojprpsfd');
    table.boolean('rxgcgbpmqp');
  });
  await knex.schema.alterTable('nglteceztb', function(table) {
    table.boolean('uhzhadslnh');
    table.integer('scmxktigit');
    table.float('tpyctwdkhj');
    table.string('qctzqixqxi');
    table.text('jpeasyiheo');
    table.text('dcbaprsosk');
    table.string('seskabfsov');
    table.float('optgugrpkh');
  });
  await knex.schema.alterTable('mdylkckwwo', function(table) {
    table.string('tmhxyyjyzm');
    table.timestamp('azyhinltij');
    table.string('gitlujwjkw');
  });
  await knex.schema.alterTable('hwztxkjpqu', function(table) {
    table.text('fqjvlpiojk');
    table.timestamp('xvdbtclqfc');
    table.timestamp('islvwgfocp');
    table.text('nllotgzjgf');
    table.text('bvhvjmeefo');
    table.float('ruvfjwaytf');
    table.bigInteger('vwsvhyoguk');
    table.bigInteger('tqaqnbvacw');
    table.json('unghuwmwwq');
  });
  await knex.schema.alterTable('btjtvirfkc', function(table) {
    table.float('ppekngfyax');
    table.integer('vhhxeejkij');
    table.json('vxlcgojhmb');
    table.string('khbnrtewgu');
    table.text('gybrbubqye');
    table.bigInteger('ycpntggvhg');
    table.string('apmgayjqev');
    table.float('saiwlqhukq');
    table.integer('nbttlsycyj');
    table.string('wasovsevge');
  });
  await knex.schema.alterTable('fdjrkdqugy', function(table) {
    table.text('yaqgxqvzzc');
    table.timestamp('uyymvzuxfl');
    table.timestamp('oymniihdmt');
    table.json('lxaqmhwnmr');
    table.text('lfhomjszmx');
    table.bigInteger('kmbcqunkox');
    table.timestamp('dhpszkonmx');
    table.string('dxcgrcvigo');
    table.bigInteger('itjshztyti');
  });
  await knex.schema.alterTable('xlxdqrhoqn', function(table) {
    table.timestamp('zmwkyzorgb');
    table.text('dlgcxjyllf');
    table.integer('fcmymdqrkq');
  });
  await knex.schema.alterTable('vnipmuwojx', function(table) {
    table.boolean('aohgbiaids');
    table.bigInteger('txtozztdzr');
    table.json('rvwkvihyyw');
    table.string('saikwuvjaw');
    table.json('erezjqcnsj');
  });
  await knex.schema.alterTable('laiuwmguck', function(table) {
    table.float('qsoysjitug');
    table.integer('vtqcxilppp');
    table.json('btulpknztp');
    table.timestamp('wucovzqzbl');
    table.float('npguissxlc');
    table.json('swzpditmlu');
    table.string('wltchaygee');
  });
  await knex.schema.alterTable('uneebwtlfw', function(table) {
    table.string('exhdpzcvjt');
    table.json('jkdnxwmoxh');
    table.timestamp('ygsymisfro');
  });
  await knex.schema.alterTable('gvgrkpivbc', function(table) {
    table.bigInteger('ioavgqghkb');
    table.float('wqdsbwxmyy');
    table.bigInteger('xxbodluszq');
    table.bigInteger('bnbzqjevdu');
    table.float('rrfjeltoeo');
    table.json('zvnewfwpgl');
    table.integer('jpnflorega');
    table.bigInteger('tcmjoutfhb');
    table.timestamp('haxbldmpad');
    table.json('tqxknqreyy');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};